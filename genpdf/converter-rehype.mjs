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
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current directory for relative imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cmd component locale imports
const cmdKo = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/ko.json`, 'utf-8'));
const cmdEn = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/en.json`, 'utf-8'));
const cmdEs = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/es.json`, 'utf-8'));
const cmdJa = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/ja.json`, 'utf-8'));

const cmdXKo = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/x/ko.json`, 'utf-8'));
const cmdXEn = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/x/en.json`, 'utf-8'));
const cmdXEs = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/x/es.json`, 'utf-8'));
const cmdXJa = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/x/ja.json`, 'utf-8'));

const cmdDevKo = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/device/ko.json`, 'utf-8'));
const cmdDevEn = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/device/en.json`, 'utf-8'));

const cmdAirKo = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/air/ko.json`, 'utf-8'));
const cmdAirEn = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/air/en.json`, 'utf-8'));
const cmdAirEs = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/air/es.json`, 'utf-8'));
const cmdAirJa = JSON.parse(readFileSync(`${__dirname}/../src/components/Cmd/air/ja.json`, 'utf-8'));

const glossaryKo = JSON.parse(readFileSync(`${__dirname}/../i18n/ko/glossary.json`, 'utf-8'));
const glossaryEn = JSON.parse(readFileSync(`${__dirname}/../i18n/en/glossary.json`, 'utf-8'));

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
 * Extract heading text content from node
 */
function extractHeadingText(node) {
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
function remarkTransformDocLinks(docPath = '', language = 'ko') {
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
function remarkAddHeadingIds(docId = '') {
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
    note: (translations['theme.admonition.note']?.message) || '노트',
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
 * Create a rehype plugin that processes <Cmd> components
 * Converts MDX Cmd JSX elements to span elements with proper locale text
 * 
 * Supports:
 * - <Cmd sid='key' product='dev' /> - Device locale
 * - <Cmd sid='key' product='air' /> - Air locale
 * - <Cmd sid='key' product='2' /> - Standard locale (with '2' to 'X' conversion)
 * - <Cmd sid='key' /> - Default (x) locale
 * - <Cmd code='i18n.key' /> - i18n code reference
 * - <Cmd>Direct text</Cmd> - Direct children text
 */
function rehypeProcessCmdComponent(language = 'ko') {
  // Create locale maps based on language
  const cmdLocaleMap = {
    ko: cmdKo,
    en: cmdEn,
    es: cmdEs,
    ja: cmdJa,
  };

  const cmdXLocaleMap = {
    ko: cmdXKo,
    en: cmdXEn,
    es: cmdXEs,
    ja: cmdXJa,
  };

  const deviceLocaleMap = {
    ko: cmdDevKo,
    en: cmdDevEn,
  };

  const airLocaleMap = {
    ko: cmdAirKo,
    en: cmdAirEn,
    es: cmdAirEs,
    ja: cmdAirJa,
  };

  const glossaryMap = {
    ko: glossaryKo,
    en: glossaryEn,
  };

  // Helper function to extract text from children
  const extractText = (nodes) => {
    if (!Array.isArray(nodes)) return '';
    return nodes
      .map(child => {
        if (child.type === 'text') return child.value;
        if (child.type === 'element' && child.tagName === 'br') return ' ';
        if (child.children) return extractText(child.children);
        return '';
      })
      .join('');
  };

  return (tree) => {
    // Visit only JSX elements
    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process Cmd JSX elements (text and flow elements)
      const isCmdElement = (node.type === 'mdxJsxTextElement' || node.type === 'mdxJsxFlowElement') 
        && node.name === 'Cmd';
      
      if (!isCmdElement) return;

      const attributes = node.attributes || [];
      const sidAttr = attributes.find(attr => attr.name === 'sid')?.value;
      const codeAttr = attributes.find(attr => attr.name === 'code')?.value;
      const productAttr = attributes.find(attr => attr.name === 'product')?.value;
      const classNameAttr = attributes.find(attr => attr.name === 'className')?.value || '';
      const tipAttr = attributes.find(attr => attr.name === 'tip')?.value;

      const classNames = classNameAttr ? ['cmd', classNameAttr] : ['cmd'];
      let textContent = '';
      let tooltipContent = '';

      // Case 1: sid attribute - lookup in locale files
      if (sidAttr) {
        let localeText = null;

        if (productAttr === '2') {
          // Standard product locale with '2' to 'X' conversion for specific keys
          const locale = cmdLocaleMap[language] || cmdEn;
          localeText = locale[sidAttr];
          if (localeText && ['biostar.login', 'audit.setting.server.server_addr', 'audit.setting.server.server_port'].includes(sidAttr)) {
            localeText = localeText.replace('2', 'X');
          }
        } else if (productAttr === 'dev') {
          // Device locale - can be device-specific
          const locale = deviceLocaleMap[language] || deviceLocaleMap.en;
          const sidValue = locale[sidAttr];
          
          if (sidValue) {
            const isGroupType = typeof sidValue === 'object' && !Array.isArray(sidValue);
            if (isGroupType) {
              // Device-specific variant - for PDF, use 'common' as fallback
              localeText = sidValue['common'] || null;
            } else {
              localeText = sidValue;
            }
          }
        } else if (productAttr === 'air') {
          // Air product locale
          const locale = airLocaleMap[language] || airLocaleMap.en;
          localeText = locale[sidAttr];
        } else {
          // Default (x) locale
          const locale = cmdXLocaleMap[language] || cmdXEn;
          localeText = locale[sidAttr];
          // Replace placeholder
          if (localeText) {
            localeText = localeText.replace('{{value}}', 'N');
          }
        }

        // Clean up HTML tags
        if (localeText) {
          textContent = localeText
            .replace(/ <br\/><br\/> /g, ' ')
            .replace(/ <br\/><br\/>$/g, '')
            .replace(/^<br\/><br\/> /g, '')
            .replace(/ <\/br> /g, ' ')
            .replace(/ <br \/>/g, ' ')
            .replace(/ <br>/g, ' ')
            .replace(/<br> /g, ' ')
            .replace(/<br\/>/g, ' ')
            .replace(/ <br> /g, ' ')
            .replace(/ <\/br> /g, ' ')
            .replace(/<br>/g, ' ')
            .replace(/<\/br>/g, ' ')
            .replace(/&sol;/g, '/')
            .replace(/\\xB0\\x43/g, '℃')
            .replace(/\\xB0\\x46/g, '℉')
            .trim();
        }

        // Add tooltip if tip attribute exists
        if (tipAttr) {
          const glossary = glossaryMap[language] || glossaryEn;
          const tipContent = glossary[tipAttr]?.description;
          if (tipContent) {
            tooltipContent = tipContent;
          }
        }
      }
      // Case 2: code attribute - i18n reference
      else if (codeAttr) {
        // For PDF generation, we'll use the code as fallback text
        // since i18n translate function is not available in Node.js context
        textContent = codeAttr;
      }
      // Case 3: Direct children text
      else if (node.children && node.children.length > 0) {
        textContent = extractText(node.children);
      }

      // Build replacement element
      const children = [];
      
      if (textContent) {
        children.push({
          type: 'text',
          value: textContent
        });
      }

      if (tooltipContent) {
        children.push({
          type: 'element',
          tagName: 'div',
          properties: { className: ['tooltip'] },
          children: [{ type: 'text', value: tooltipContent }]
        });
      }

      const replacement = {
        type: 'element',
        tagName: 'span',
        properties: { className: classNames },
        children: children
      };

      parent.children[index] = replacement;
    });
  };
}

/**
 * Create a rehype plugin that adds target="_blank" to external links
 */
function rehypeAddTargetBlankToExternalLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!node || node.tagName !== 'a') return;
      
      const href = node.properties?.href;
      if (!href) return;
      
      // Add target="_blank" to external links (starting with http or https)
      if (typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://'))) {
        node.properties.target = '_blank';
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
function createProcessor(translations = {}, productOption = '', basePath = '', headingId = '', docPath = '', language = 'ko') {
  return unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkDirective)
    .use(remarkDirectiveToAdmonition)
    .use(remarkRemoveComments)
    .use(remarkTransformDocLinks, docPath, language)
    .use(remarkAddHeadingIds, headingId)
    .use(remarkProcessIncludeXclude, productOption)
    .use(remarkPrism)
    .use(remarkRehype, { passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement'] })
    .use(rehypeAddAdmonitionIcons, translations)
    .use(rehypeProcessAdmonitions)
    .use(rehypeAddTargetBlankToExternalLinks)
    .use(rehypeProcessMdxElements, translations, basePath)
    .use(rehypeProcessCmdComponent, language)
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
 * @param {string} headingId - Heading ID for h1 element
 * @param {string} docPath - Full document path (e.g., 'platform/plugins/index')
 * @param {string} language - Language code (ko, en, ja, es, etc.)
 * @returns {Promise<string>} HTML content
 */
export async function markdownToHtml(mdContent, translations = {}, productOption = '', basePath = '', headingId = '', docPath = '', language = 'ko') {
  const processor = createProcessor(translations, productOption, basePath, headingId, docPath, language);
  
  try {
    const file = await processor.process(mdContent);
    return file.value;
  } catch (error) {
    console.error('Error processing markdown:', error.message);
    return '';
  }
}
