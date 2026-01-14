/**
 * Markdown to HTML conversion using rehype-mdx-elements
 * AST-based implementation with unified/remark/rehype ecosystem
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypeMdxElements } from 'rehype-mdx-elements';
import { visit } from 'unist-util-visit';

/**
 * Create a remark plugin that removes MDX comments
 */
function remarkRemoveComments() {
  return (tree) => {
    // Filter out comment nodes from the tree
    if (tree.children && Array.isArray(tree.children)) {
      tree.children = tree.children.filter(node => {
        // Remove mdxFlowExpression comments
        if (node.type === 'mdxFlowExpression') {
          const value = node.value?.trim() || '';
          return !(value.startsWith('/*') && value.endsWith('*/'));
        }
        return true;
      });
    }
  };
}

/**
 * Create a remark plugin that processes Include/Xclude components
 */
function remarkProcessIncludeXclude(productOption = '') {
  return (tree) => {
    const products = productOption ? productOption.split(',').map(p => p.trim()) : [];

    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process Include components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Include') {
        const productAttr = node.attributes?.find(attr => attr.name === 'product')?.value || '';
        const includeProducts = productAttr.split(',').map(p => p.trim());
        
        if (products.length === 0 || !includeProducts.some(p => products.includes(p))) {
          // Remove the Include node and its children if product doesn't match or no filter
          parent.children.splice(index, 1);
        } else {
          // Keep only the children, remove the wrapper
          const children = node.children || [];
          parent.children.splice(index, 1, ...children);
        }
      }

      // Process Xclude components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Xclude') {
        const productAttr = node.attributes?.find(attr => attr.name === 'product')?.value || '';
        const xcludeProducts = productAttr.split(',').map(p => p.trim());
        
        if (products.length === 0 || xcludeProducts.some(p => products.includes(p))) {
          // Remove the Xclude node and its children if product matches or no filter
          parent.children.splice(index, 1);
        } else {
          // Keep only the children, remove the wrapper
          const children = node.children || [];
          parent.children.splice(index, 1, ...children);
        }
      }
    });
  };
}

/**
 * Create a rehype plugin that converts MDX JSX elements to HTML
 */
function rehypeProcessMdxElements(translations = {}) {
  return (tree) => {
    const figureCaptionText = 
      (translations['theme.figureCaption.desc'] && translations['theme.figureCaption.desc'].message) || 
      '위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다.';
    
    const revisionLabel = 
      (translations['theme.revision.badge'] && translations['theme.revision.badge'].message) || 
      'Affects version';

    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process Image components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Image') {
        const attributes = node.attributes || [];
        const srcAttr = attributes.find(attr => attr.name === 'src');
        const src = srcAttr ? srcAttr.value : '';
        const hasCaption = attributes.some(attr => attr.name === 'caption');
        const hasIco = attributes.some(attr => attr.name === 'ico');

        let replacement = null;

        if (hasCaption && src) {
          replacement = {
            type: 'element',
            tagName: 'figure',
            properties: {},
            children: [
              {
                type: 'element',
                tagName: 'img',
                properties: { src },
                children: []
              },
              {
                type: 'element',
                tagName: 'figcaption',
                properties: {},
                children: [{ type: 'text', value: figureCaptionText }]
              }
            ]
          };
        } else if (hasIco && src) {
          replacement = {
            type: 'element',
            tagName: 'img',
            properties: { src, className: ['ico'] },
            children: []
          };
        } else if (src) {
          replacement = {
            type: 'element',
            tagName: 'p',
            properties: { className: ['hasimg'] },
            children: [
              {
                type: 'element',
                tagName: 'img',
                properties: { src },
                children: []
              }
            ]
          };
        }

        if (replacement) {
          parent.children[index] = replacement;
        }
      }

      // Process Badge components
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'Badge') {
        const attributes = node.attributes || [];
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const className = classNameAttr ? classNameAttr.value : '';
        
        let textContent = '';
        if (node.children && node.children.length > 0) {
          const extractText = (nodes) => {
            return nodes
              .map(child => {
                if (child.type === 'text') return child.value;
                if (child.children) return extractText(child.children);
                return '';
              })
              .join('');
          };
          textContent = extractText(node.children);
        }

        let displayText = textContent;
        if (!className && textContent) {
          displayText = `${revisionLabel}:&nbsp;${textContent}`;
        }

        const classNames = className ? ['badge', className] : ['badge'];
        
        const replacement = {
          type: 'element',
          tagName: 'span',
          properties: { className: classNames },
          children: [{ type: 'text', value: displayText }]
        };

        parent.children[index] = replacement;
      }
    });
  };
}

/**
 * Create a unified processor with rehype-mdx-elements support
 */
function createProcessor(translations = {}, productOption = '') {
  return unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkRemoveComments)
    .use(remarkProcessIncludeXclude, productOption)
    .use(remarkRehype, { passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement'] })
    .use(rehypeProcessMdxElements, translations)
    .use(rehypeMdxElements, {
      allowedElements: ['Image', 'Badge', 'Include', 'Xclude']
    })
    .use(rehypeStringify);
}

/**
 * Convert markdown to HTML using rehype-mdx-elements
 * @param {string} mdContent - Markdown content
 * @param {Object} translations - i18n translations object
 * @param {string} productOption - Product filter option
 * @returns {Promise<string>} HTML content
 */
export async function markdownToHtml(mdContent, translations = {}, productOption = '') {
  const processor = createProcessor(translations, productOption);
  
  try {
    const file = await processor.process(mdContent);
    return file.value;
  } catch (error) {
    console.error('Error processing markdown:', error.message);
    return '';
  }
}
