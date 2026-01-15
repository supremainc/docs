/**
 * Remark plugins for markdown processing
 * These plugins process the markdown AST before conversion to HTML
 */

import { visit } from 'unist-util-visit';

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
              .replace(/[^\w\s\-가-힣]/g, '')  // Keep Korean chars and hyphens
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
 */
function processIncludeXcludeRecursive(node, products) {
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

      let shouldKeepChildren = false;
      let shouldRemove = false;

      if (isInclude) {
        // Include: keep children if product matches
        if (products.length > 0 && productList.some(p => products.includes(p))) {
          shouldKeepChildren = true;
        } else {
          shouldRemove = true;
        }
      } else {
        // Xclude: remove if product matches, otherwise keep children
        if (products.length > 0 && productList.some(p => products.includes(p))) {
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
        processIncludeXcludeRecursive(child, products);
        
        // Replace the component tag with its children
        const children = child.children || [];
        node.children.splice(i, 1, ...children);
      }
    } else {
      // For non-Include/Xclude nodes, recursively process their children
      processIncludeXcludeRecursive(child, products);
    }
  }
}

/**
 * Create a remark plugin that processes Include/Xclude MDX JSX components
 * Handles: <Include product='...'>, <Xclude product='...'>
 * 
 * Logic matches src/components/Include and src/components/Xclude:
 * - Include: render if product matches, otherwise remove
 * - Xclude: remove if product matches, otherwise render
 */
export function remarkProcessIncludeXclude(productOption = '') {
  return (tree) => {
    const products = productOption ? productOption.split(',').map(p => p.trim()) : [];

    // Start recursive processing from root
    processIncludeXcludeRecursive(tree, products);
  };
}

/**
 * Create a remark plugin that converts directive nodes to admonition containers
 */
export function remarkDirectiveToAdmonition() {
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
            ['Td', 'Th', 'Image', 'Badge'].includes(n.name)
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
