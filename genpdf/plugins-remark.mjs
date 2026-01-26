/**
 * Remark plugins for markdown processing
 * These plugins process the markdown AST before conversion to HTML
 */

import { visit } from 'unist-util-visit';
import fs from 'fs';

/**
 * Create a remark plugin that handles text directives
 * Text directives like `:N:` should be converted to plain text
 * This prevents directive syntax from breaking content like "1:N" authentication modes
 */
export function remarkProcessTextDirective() {
  return (tree) => {
    visit(tree, 'textDirective', (node, index, parent) => {
      if (!parent || index === null) return;

      // Replace textDirective node with plain text
      // This handles cases where patterns like "1:N " get parsed as directives
      // Reconstruct the directive as plain text: :name:
      const plainText = {
        type: 'text',
        value: `:${node.name}:`
      };

      parent.children[index] = plainText;
    });
  };
}

/**
 * Create a remark plugin that removes MDX comments
 */
export function remarkRemoveComments() {
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
 * Extract heading text content from node
 */
export function extractHeadingText(node) {
  let text = '';
  function traverse(n) {
    if (n.type === 'text') {
      text += n.value;
    } else if (n.children && Array.isArray(n.children)) {
      n.children.forEach(child => traverse(child));
    }
  }
  if (node.children) {
    node.children.forEach(child => traverse(child));
  }
  return text;
}

/**
 * Create a remark plugin that converts markdown image paths to absolute file paths
 * Converts /img/* paths to absolute file system paths for PDF generation
 */
export function remarkTransformImagePaths(basePath = '') {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (!node.url) return;

      // Convert /img/... to absolute file path
      if (node.url.startsWith('/img/')) {
        if (basePath) {
          node.url = basePath.replace(/\\/g, '/') + '/static' + node.url;
        }
      }
    });
  };
}

/**
 * Create a remark plugin that transforms relative doc links for merged output
 * Since all docs are merged into one HTML, relative links need to point to heading IDs
 * 
 * docPath format: "platform/plugins/index"
 * language: "ko", "en", "ja", "es"
 * Link transformation rules:
 * - [text](./doc-id) or [text](doc-id) → href='#doc-id' (same group)
 * - [text](../biostar_x/licensing) → href='https://docs.supremainc.com/platform/biostar_x/licensing' (ko)
 *                                  → href='https://docs.supremainc.com/en/platform/biostar_x/licensing' (en)
 * - [text](../../platform/biostar_x/licensing) → similar to above
 * - [text](doc-id#anchor) → href='#anchor' (same group with anchor)
 * - [text](../other-group/doc-id#anchor) → href='https://...' (external with anchor)
 */
export function remarkTransformDocLinks(docPath = '', language = 'ko') {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (!node.url) return;
      
      const url = node.url;
      // Build base URL based on language
      const baseUrl = language === 'ko' 
        ? 'https://docs.supremainc.com'
        : `https://docs.supremainc.com/${language}`;
      
      // Skip if already an absolute URL or starts with # (internal anchor)
      if (url.startsWith('http') || url.startsWith('https') || url.startsWith('#')) {
        return;
      }
      
      // Split URL and anchor
      const [pathPart, anchor] = url.split('#');
      
      // Check if this is a relative path with ../ (external doc reference)
      if (pathPart.includes('..')) {
        // Calculate absolute path from current docPath
        // docPath format: "platform/plugins/index"
        let absolutePath = pathPart;
        
        if (docPath) {
          // Get current directory from docPath
          const docParts = docPath.split('/');
          // Remove the file name (last part)
          const currentDir = docParts.slice(0, -1);
          
          // Parse the relative path
          const pathParts = pathPart.split('/');
          let upLevels = 0;
          let docPathSegments = [];
          
          for (const part of pathParts) {
            if (part === '..') {
              upLevels++;
            } else if (part !== '.') {
              docPathSegments.push(part);
            }
          }
          
          // Calculate absolute path
          const basePath = currentDir.slice(0, Math.max(0, currentDir.length - upLevels));
          const fullPath = [...basePath, ...docPathSegments];
          absolutePath = fullPath.join('/');
        } else {
          // No current docPath, remove leading ../ and use as-is
          absolutePath = pathPart.replace(/^(\.\.\/)+/, '');
        }
        
        // Convert to full URL with language-aware base
        node.url = `${baseUrl}/${absolutePath}`;
        
        // Add anchor if present
        if (anchor) {
          node.url += `#${anchor}`;
        }
      } else {
        // Relative doc link in same or sibling group
        // Extract doc ID from path
        const [docId, hashAnchor] = pathPart.replace(/^\.\//, '').split('#');
        
        // For same-group links, use hash anchor
        if (docId) {
          node.url = `#${docId}`;
        }
        
        // If there's an anchor, use it instead
        if (hashAnchor) {
          node.url = `#${hashAnchor}`;
        } else if (anchor) {
          node.url = `#${anchor}`;
        }
      }
    });
  };
}

/**
 * Create a remark plugin that adds IDs to headings
 * h1: uses docId (document ID from metadata)
 * h2+: uses explicit [#slug] if present, otherwise generates from content
 */
export function remarkAddHeadingIds(docId = '') {
  return (tree) => {
    visit(tree, 'heading', (node) => {
      if (!node.children || node.children.length === 0) return;

      // h1: use docId
      if (node.depth === 1 && docId) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.id = docId;
        return;
      }

      // h2+: check for explicit [#slug] or generate from content
      if (node.depth >= 2) {
        let slug = null;
        const lastChild = node.children[node.children.length - 1];

        // Check if last child contains [#slug] pattern
        if (lastChild && lastChild.type === 'text') {
          const slugMatch = lastChild.value.match(/\s*\[#([^\]]+)\]\s*$/);
          if (slugMatch) {
            slug = slugMatch[1];
            // Remove the [#slug] from the text
            lastChild.value = lastChild.value.replace(/\s*\[#[^\]]+\]\s*$/, '').trimEnd();
          }
        }

        // If no explicit slug, generate from content
        if (!slug) {
          const textContent = extractHeadingText(node);
          if (textContent) {
            slug = textContent
              .toLowerCase()
              .trim()
              // Keep CJK characters (Korean, Japanese, Chinese), Latin extended (Spanish, Portuguese, etc.)
              // and Cyrillic (Russian, Ukrainian, Serbian, Belarusian, etc.)
              // Unicode ranges: 
              // - Korean: U+AC00-U+D7AF (가-힣)
              // - Japanese Hiragana: U+3040-U+309F
              // - Japanese Katakana: U+30A0-U+30FF
              // - CJK Unified Ideographs: U+4E00-U+9FFF
              // - Latin Extended-A: U+0100-U+017F (covers most European languages)
              // - Latin-1 Supplement: U+00C0-U+00FF (Spanish/Portuguese accents: á, é, í, ó, ú, ñ, ü, etc.)
              // - Cyrillic: U+0400-U+04FF (Russian, Ukrainian, Serbian, Belarusian, etc.)
              .replace(/[^\w\s\-가-힣\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u00C0-\u00FF\u0100-\u017F\u0400-\u04FF]/g, '')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')
              .replace(/^-+|-+$/g, '');
          }
        }

        // Apply the ID
        if (slug) {
          node.data = node.data || {};
          node.data.hProperties = node.data.hProperties || {};
          node.data.hProperties.id = slug;
        }
      }
    });
  };
}

/**
 * Recursively process Include/Xclude components and their nested children
 * @param {Object} node - Node to process
 * @param {Array<string>} products - List of selected products
 * @param {string} typeFilter - Type filter for ref-based matching (optional)
 * @param {string} docId - Current document ID for pages-based matching (optional)
 */
function processIncludeXcludeRecursive(node, products, typeFilter = '', docId = '') {
  if (!node || !node.children || !Array.isArray(node.children)) {
    return;
  }

  // Process children in reverse order to safely splice
  for (let i = node.children.length - 1; i >= 0; i--) {
    const child = node.children[i];
    
    const isInclude = child.type === 'mdxJsxFlowElement' && child.name === 'Include';
    const isXclude = child.type === 'mdxJsxFlowElement' && child.name === 'Xclude';
    
    if (isInclude || isXclude) {
      // Extract product attribute
      const productAttr = child.attributes?.find(attr => attr.name === 'product');
      const productValue = productAttr?.value || '';
      const productList = productValue.split(',').map(p => p.trim()).filter(p => p);

      // Extract type and ref attributes for ref-based filtering
      const typeAttr = child.attributes?.find(attr => attr.name === 'type');
      const refAttr = child.attributes?.find(attr => attr.name === 'ref');
      const typeValue = typeAttr?.value || typeFilter;
      const refValue = refAttr?.value || '';
      const refList = refValue.split(',').map(r => r.trim()).filter(r => r);

      // Extract pages attribute for document ID-based filtering
      const pagesAttr = child.attributes?.find(attr => attr.name === 'pages');
      const pagesValue = pagesAttr?.value || '';
      const pagesList = pagesValue.split(',').map(p => p.trim()).filter(p => p);

      let shouldKeepChildren = false;
      let shouldRemove = false;

      // Check product-based filter
      let productMatches = true;
      if (productList.length > 0) {
        // If product attribute is specified, check if any product matches
        productMatches = products.length === 0 || productList.some(p => products.includes(p));
      }

      // Check ref-based filter
      let refMatches = true;
      if (refList.length > 0 && typeValue) {
        // If both type and ref are specified, check if typeValue matches any ref
        refMatches = refList.includes(typeValue);
      }

      // Check pages-based filter (document ID matching)
      let pagesMatches = true;
      if (pagesList.length > 0) {
        // If pages attribute is specified, check if docId matches any pages value
        pagesMatches = docId && pagesList.includes(docId);
      }

      // Combine filters with AND logic: all specified filters must match
      const filtersMatch = productMatches && refMatches && pagesMatches;

      if (isInclude) {
        // Include: keep children if all filters match
        if (filtersMatch) {
          shouldKeepChildren = true;
        } else {
          shouldRemove = true;
        }
      } else {
        // Xclude: remove if all filters match, otherwise keep children
        if (filtersMatch) {
          shouldRemove = true;
        } else {
          shouldKeepChildren = true;
        }
      }

      if (shouldRemove) {
        // Remove the element completely
        node.children.splice(i, 1);
      } else if (shouldKeepChildren) {
        // First, recursively process nested Include/Xclude within this node's children
        // BEFORE replacing the component tag itself
        processIncludeXcludeRecursive(child, products, typeFilter, docId);
        
        // Replace the component tag with its children
        const children = child.children || [];
        node.children.splice(i, 1, ...children);
      }
    } else {
      // For non-Include/Xclude nodes, recursively process their children
      processIncludeXcludeRecursive(child, products, typeFilter, docId);
    }
  }
}

/**
 * Create a remark plugin that processes Include/Xclude MDX JSX components
 * Handles: <Include product='...' /> | <Include type='...' ref='...' /> | <Include pages='...' />
 * 
 * Logic matches src/components/Include and src/components/Xclude:
 * - Include: render if filters match, otherwise remove
 * - Xclude: remove if filters match, otherwise render
 * 
 * Filter combinations:
 * 1. product attribute: matches if product is in productOption
 * 2. type and ref attributes: matches if typeFilter matches any ref value
 * 3. pages attribute: matches if docId matches any pages value
 * 4. Multiple specified: matches if ALL conditions are true (AND logic)
 */
export function remarkProcessIncludeXclude(productOption = '', typeFilter = '', docId = '') {
  return (tree) => {
    const products = productOption ? productOption.split(',').map(p => p.trim()) : [];

    // Start recursive processing from root with docId
    processIncludeXcludeRecursive(tree, products, typeFilter, docId);
  };
}

/**
 * Create a remark plugin that normalizes Table structure
 * Unwraps paragraph nodes containing Table elements (Td, Th)
 * 
 * Problem: When <Td> appears after newline inside <Row>, remark wraps it in a paragraph
 * <Row>
 *   <paragraph>
 *     <Td>...</Td>
 *     <Td>...</Td>
 *   </paragraph>
 * </Row>
 * 
 * Solution: Unwrap paragraph nodes that contain only JSX Table elements
 */
export function remarkNormalizeTableStructure() {
  return (tree) => {
    visit(tree, (node) => {
      if (!node || !node.children || !Array.isArray(node.children)) return;

      // Target: Row, Table, Thead, Tbody elements
      const isTableContainer = (n) => {
        return n.type === 'mdxJsxFlowElement' && 
               ['Row', 'Table', 'Thead', 'Tbody'].includes(n.name);
      };

      // Check each node that is a table container
      if (!isTableContainer(node)) return;

      // Process children in reverse to safely splice
      for (let i = node.children.length - 1; i >= 0; i--) {
        const child = node.children[i];
        
        // If child is a paragraph, check its contents
        if (child.type === 'paragraph' && child.children && Array.isArray(child.children)) {
          const hasTableElements = child.children.some(n => 
            (n.type === 'mdxJsxTextElement' || n.type === 'mdxJsxFlowElement') && 
            ['Td', 'Th', 'Image', 'Badge', 'Linkto'].includes(n.name)
          );

          if (hasTableElements) {
            // Unwrap: replace paragraph with its children
            node.children.splice(i, 1, ...child.children);
          }
        }
      }
    });
  };
}

/**
 * Remark plugin to process <Faqs /> component
 * Converts Faqs JSX elements to structured content
 */
export function remarkProcessFaqs(productOption = '', language = 'ko') {
  return (tree) => {
    const langMap = {
      ko: 'i18n/ko/faqs.json',
      en: 'i18n/en/faqs.json',
      ja: 'i18n/ja/faqs.json',
      es: 'i18n/es/faqs.json'
    };

    const faqsFilePath = langMap[language] || langMap['ko'];
    let faqsData = [];

    try {
      const content = fs.readFileSync(faqsFilePath, 'utf-8');
      faqsData = JSON.parse(content);
    } catch (error) {
      console.warn(`Failed to load FAQs from ${faqsFilePath}:`, error.message);
      return;
    }

    const productList = productOption ? productOption.split(',').map(p => p.trim()) : null;

    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Check for <Faqs /> MDX component
      const isFaqElement = (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'Faqs';
      
      if (!isFaqElement) return;

      // Filter FAQs by product
      const filteredCategories = faqsData
        .map(cat => {
          const contentsArr = Array.isArray(cat.category.contents)
            ? cat.category.contents
            : [cat.category.contents];
          const filteredContents = productList
            ? contentsArr.filter(faq => faq.product.some(p => productList.includes(p)))
            : contentsArr;
          return filteredContents.length > 0
            ? { 
                title: cat.category.title, 
                hid: cat.category.hid, 
                contents: filteredContents.map(faq => ({
                  ...faq,
                  // Convert href='...#anchor' to href='#anchor' (remove path before #)
                  answer: Array.isArray(faq.answer)
                    ? faq.answer.map(a => a.replace(/href='[^']*#/g, "href='#"))
                    : faq.answer.replace(/href='[^']*#/g, "href='#")
                }))
              }
            : null;
        })
        .filter(Boolean);

      if (filteredCategories.length === 0) {
        // Replace with empty message
        parent.children[index] = {
          type: 'paragraph',
          children: [{ type: 'text', value: 'There are no FAQs for this product.' }]
        };
        return;
      }

      // Build FAQ sections with MDX JSX wrapper
      const categoryContent = [];

      filteredCategories.forEach((cat) => {
        // Category wrapper with class
        const categoryItems = [];

        // Add category heading
        categoryItems.push({
          type: 'heading',
          depth: 3,
          children: [{ type: 'text', value: cat.title }]
        });

        // Add FAQ items
        cat.contents.forEach((faq, faqIdx) => {
          // FAQ item wrapper
          const faqItemContent = [];

          // Question
          faqItemContent.push({
            type: 'paragraph',
            properties: { className: ['faq-question'] },
            children: [
              {
                type: 'html',
                value: '<span class="question__mark">Q.</span>'
              },
              {
                type: 'html',
                value: faq.question
              }
            ]
          });

          // Answer
          const answerItems = Array.isArray(faq.answer) ? faq.answer : [faq.answer];
          const answerChildren = answerItems.map((a, i) => ({
            type: 'listItem',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'html',
                    value: a
                  }
                ]
              }
            ]
          }));

          faqItemContent.push({
            type: 'list',
            ordered: false,
            properties: { className: ['faq-answer'] },
            children: answerChildren
          });

          // Wrap FAQ item in div with faq-item class
          categoryItems.push({
            type: 'mdxJsxFlowElement',
            name: 'div',
            attributes: [{ type: 'mdxAttribute', name: 'className', value: 'faq-item' }],
            children: faqItemContent
          });
        });

        // Wrap category in div with faq-category class
        categoryContent.push({
          type: 'mdxJsxFlowElement',
          name: 'div',
          attributes: [{ type: 'mdxAttribute', name: 'className', value: 'faq-category' }],
          children: categoryItems
        });
      });

      // Wrap all FAQs in container div
      const faqContainer = {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [{ type: 'mdxAttribute', name: 'className', value: 'faq-container' }],
        children: categoryContent
      };

      // Replace Faqs component with generated content
      parent.children[index] = faqContainer;
    });
  };
}

