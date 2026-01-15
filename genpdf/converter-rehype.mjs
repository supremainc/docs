/**
 * Markdown to HTML conversion using rehype-mdx-elements
 * AST-based implementation with unified/remark/rehype ecosystem
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkDirective from 'remark-directive';
import remarkPrism from 'remark-prism';
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
 * Create a remark plugin that converts directive nodes to admonition containers
 */
function remarkDirectiveToAdmonition() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      // Convert containerDirective to blockquote-like structure that rehype can understand
      const type = node.name;
      const validAdmonitions = ['info', 'note', 'tip', 'warning', 'danger', 'caution'];
      
      if (!validAdmonitions.includes(type)) return;

      // Create a blockquote with data-admonition attribute
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = [`admonition admonition-${type}`];
      node.data.hProperties['data-admonition'] = type;
    });
  };
}

/**
 * Create a rehype plugin that adds icons and labels to admonitions
 */
function rehypeAddAdmonitionIcons(translations = {}) {
  const colorMap = {
    info: '#0ea5e9',
    note: '#8b5cf6',
    tip: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    caution: '#f59e0b'
  };

  // Get labels from translations
  const labelMap = {
    info: (translations['theme.admonition.info']?.message) || '알아두기',
    note: (translations['theme.admonition.note']?.message) || '참고',
    tip: (translations['theme.admonition.tip']?.message) || '팁',
    warning: (translations['theme.admonition.warning']?.message) || '경고',
    danger: (translations['theme.admonition.danger']?.message) || '위험',
    caution: (translations['theme.admonition.caution']?.message) || '주의'
  };

  // SVG paths for icons
  const iconPaths = {
    info: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
    note: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
    tip: 'M6.5 0C3.48 0 1 2.19 1 5c0 .592.35 1.242 1 2.215V15c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7.215c.65-.973 1-1.623 1-2.215 0-2.81-2.48-5-5.5-5zm3.75 9c0 .372-.27.645-.75.645h-2.5v.75c0 .372-.278.645-.75.645-.472 0-.75-.273-.75-.645v-.75h-2.5c-.48 0-.75-.273-.75-.645 0-.375.27-.645.75-.645h2.5V7c0-.372.278-.645.75-.645.472 0 .75.273.75.645v1.355h2.5c.48 0 .75.27.75.645z',
    warning: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z',
    danger: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01',
    caution: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z'
  };

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Find admonition divs and add icon wrapper
      if (node.tagName === 'div') {
        const classes = node.properties?.className || [];
        const isAdmonition = Array.isArray(classes) && classes.some(c => c?.includes('admonition-'));
        
        if (isAdmonition) {
          // Extract admonition type from className
          const typeClass = classes.find(c => c?.startsWith('admonition-'));
          const type = typeClass?.replace('admonition-', '') || 'info';
          const color = colorMap[type] || '#666';
          const label = labelMap[type] || type;
          const iconPath = iconPaths[type] || iconPaths.info;
          
          // Create icon SVG element
          const iconElement = {
            type: 'element',
            tagName: 'svg',
            properties: {
              viewBox: type === 'danger' ? '0 0 24 24' : (type === 'tip' ? '0 0 12 16' : (type === 'warning' || type === 'caution' ? '0 0 16 16' : '0 0 14 16')),
              width: '20',
              height: '20',
              fill: type === 'danger' ? 'none' : 'currentColor',
              stroke: type === 'danger' ? color : 'none',
              strokeWidth: type === 'danger' ? '2' : '0',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              style: `color:${color};flex-shrink:0;margin-top:2px;`
            },
            children: [
              {
                type: 'element',
                tagName: type === 'danger' ? 'path' : 'path',
                properties: {
                  fillRule: type === 'danger' ? 'none' : 'evenodd',
                  d: iconPath,
                  fill: type === 'danger' ? 'none' : 'currentColor'
                },
                children: []
              }
            ]
          };

          // Create label element
          const labelElement = {
            type: 'element',
            tagName: 'div',
            properties: {
              style: `font-weight:600;color:${color};margin-bottom:8px;`
            },
            children: [{
              type: 'text',
              value: label
            }]
          };

          // Create header wrapper with icon and label
          const headerWrapper = {
            type: 'element',
            tagName: 'div',
            properties: {
              style: 'display:flex;align-items:center;gap:8px;margin-bottom:8px;'
            },
            children: [iconElement, labelElement]
          };

          // Create content wrapper
          const contentWrapper = {
            type: 'element',
            tagName: 'div',
            properties: { style: 'flex:1;' },
            children: node.children || []
          };

          // Create icon wrapper element
          const iconWrapper = {
            type: 'element',
            tagName: 'div',
            properties: {
              style: `display:flex;flex-direction:column;`
            },
            children: [headerWrapper, contentWrapper]
          };
          
          // Replace the children with the icon wrapper
          node.children = [iconWrapper];
        }
      }
    });
  };
}

/**
 * Create a rehype plugin that processes directive-based admonitions
 */
function rehypeProcessAdmonitions() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process directive-generated divs with admonition classes
      if (node.tagName === 'div') {
        const classes = node.properties?.className;
        if (Array.isArray(classes) && classes.some(c => c?.includes('admonition'))) {
          // Already processed by remark-directive
          return;
        }
      }
    });
  };
}

/**
 * Create a rehype plugin that converts MDX JSX elements to HTML
 */
function rehypeProcessMdxElements(translations = {}, basePath = '') {
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
        let src = srcAttr ? srcAttr.value : '';
        
        // Convert to absolute file system path for PDF generation
        if (src && basePath) {
          // Remove leading slashes and normalize
          const normalizedSrc = src.replace(/^\//, '').replace(/^img\//, '');
          src = basePath.replace(/\\/g, '/') + '/static/img/' + normalizedSrc;
        } else if (src && !src.startsWith('/')) {
          // Fallback: normalize relative paths to web absolute paths
          src = src.replace(/^\.\//, '/img/').replace(/^\.\.\/img\//, '/img/').replace(/^\.\.\//, '/');
          if (!src.startsWith('/')) {
            src = '/img/' + src;
          }
        }
        
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
function createProcessor(translations = {}, productOption = '', basePath = '') {
  return unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkDirective)
    .use(remarkDirectiveToAdmonition)
    .use(remarkRemoveComments)
    .use(remarkProcessIncludeXclude, productOption)
    .use(remarkPrism)
    .use(remarkRehype, { passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement'] })
    .use(rehypeAddAdmonitionIcons, translations)
    .use(rehypeProcessAdmonitions)
    .use(rehypeProcessMdxElements, translations, basePath)
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
 * @param {string} basePath - Base path for absolute file paths (for PDF generation)
 * @returns {Promise<string>} HTML content
 */
export async function markdownToHtml(mdContent, translations = {}, productOption = '', basePath = '') {
  const processor = createProcessor(translations, productOption, basePath);
  
  try {
    const file = await processor.process(mdContent);
    return file.value;
  } catch (error) {
    console.error('Error processing markdown:', error.message);
    return '';
  }
}
