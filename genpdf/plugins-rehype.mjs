/**
 * Rehype plugins for HTML processing
 * These plugins process the HTML AST after conversion from markdown
 */

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
 * Create a rehype plugin that adds icons and labels to admonitions
 */
export function rehypeAddAdmonitionIcons(translations = {}) {
  const colorMap = {
    info: '#0ea5e9',
    note: '#8b5cf6',
    tip: '#10b981',
    warning: '#a32343',
    danger: '#ef4444',
    caution: '#f59e0b'
  };

  // Get labels from translations with proper fallbacks
  const getAdmonitionLabel = (type) => {
    const key = `theme.admonition.${type}`;
    const trans = translations[key];
    const isValid = trans && typeof trans === 'object' && trans.message;
    
    if (isValid) {
      return trans.message;
    }
    
    const fallbacks = {
      info: '알아두기',
      note: '참고',
      tip: '팁',
      warning: '경고',
      danger: '위험',
      caution: '주의'
    };
    
    return fallbacks[type] || type;
  };

  const labelMap = {
    info: getAdmonitionLabel('info'),
    note: getAdmonitionLabel('note'),
    tip: getAdmonitionLabel('tip'),
    warning: getAdmonitionLabel('warning'),
    danger: getAdmonitionLabel('danger'),
    caution: getAdmonitionLabel('caution')
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

      if (node.tagName === 'div') {
        let classes = node.properties?.className || [];
        
        let classString = '';
        if (Array.isArray(classes)) {
          classString = classes.join(' ');
        } else if (typeof classes === 'string') {
          classString = classes;
        }
        
        const isAdmonition = classString.includes('admonition-');
        
        if (isAdmonition) {
          const match = classString.match(/admonition-(\w+)/);
          const type = match ? match[1] : 'info';
          const color = colorMap[type] || '#666';
          const label = labelMap[type] || type;
          const iconPath = iconPaths[type] || iconPaths.info;
          
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
                tagName: 'path',
                properties: {
                  fillRule: type === 'danger' ? 'none' : 'evenodd',
                  d: iconPath,
                  fill: type === 'danger' ? 'none' : 'currentColor'
                },
                children: []
              }
            ]
          };

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

          const headerWrapper = {
            type: 'element',
            tagName: 'div',
            properties: {
              style: 'display:flex;align-items:center;gap:8px;margin-bottom:8px;'
            },
            children: [iconElement, labelElement]
          };

          const contentWrapper = {
            type: 'element',
            tagName: 'div',
            properties: { style: 'flex:1;' },
            children: node.children || []
          };

          const iconWrapper = {
            type: 'element',
            tagName: 'div',
            properties: {
              style: `display:flex;flex-direction:column;`
            },
            children: [headerWrapper, contentWrapper]
          };
          
          node.children = [iconWrapper];
        }
      }
    });
  };
}

/**
 * Create a rehype plugin that processes directive-based admonitions
 */
export function rehypeProcessAdmonitions() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!node || !parent || index === null) return;

      if (node.tagName === 'div') {
        const classes = node.properties?.className;
        if (Array.isArray(classes) && classes.some(c => c?.includes('admonition'))) {
          return;
        }
      }
    });
  };
}

/**
 * Create a rehype plugin that processes <Cmd> components
 * Converts MDX Cmd JSX elements to span elements with proper locale text
 */
export function rehypeProcessCmdComponent(language = 'ko') {
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
    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

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

      if (sidAttr) {
        let localeText = null;

        if (productAttr === '2') {
          const locale = cmdLocaleMap[language] || cmdEn;
          localeText = locale[sidAttr];
          if (localeText && ['biostar.login', 'audit.setting.server.server_addr', 'audit.setting.server.server_port'].includes(sidAttr)) {
            localeText = localeText.replace('2', 'X');
          }
        } else if (productAttr === 'dev') {
          const locale = deviceLocaleMap[language] || deviceLocaleMap.en;
          const sidValue = locale[sidAttr];
          
          if (sidValue) {
            const isGroupType = typeof sidValue === 'object' && !Array.isArray(sidValue);
            if (isGroupType) {
              localeText = sidValue['common'] || null;
            } else {
              localeText = sidValue;
            }
          }
        } else if (productAttr === 'air') {
          const locale = airLocaleMap[language] || airLocaleMap.en;
          localeText = locale[sidAttr];
        } else {
          const locale = cmdXLocaleMap[language] || cmdXEn;
          localeText = locale[sidAttr];
          if (localeText) {
            localeText = localeText.replace('{{value}}', 'N');
          }
        }

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

        if (tipAttr) {
          const glossary = glossaryMap[language] || glossaryEn;
          const tipContent = glossary[tipAttr]?.description;
          if (tipContent) {
            tooltipContent = tipContent;
          }
        }
      } else if (codeAttr) {
        textContent = codeAttr;
      } else if (node.children && node.children.length > 0) {
        textContent = extractText(node.children);
      }

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
export function rehypeAddTargetBlankToExternalLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!node || node.tagName !== 'a') return;
      
      const href = node.properties?.href;
      if (!href) return;
      
      if (typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://'))) {
        node.properties.target = '_blank';
      }
    });
  };
}

/**
 * Create a rehype plugin that converts MDX JSX elements to HTML
 */
export function rehypeProcessMdxElements(translations = {}, basePath = '') {
  return (tree) => {
    const figureCaptionText = 
      (translations['theme.figureCaption.desc'] && translations['theme.figureCaption.desc'].message) || 
      '위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다.';
    
    const revisionLabel = 
      (translations['theme.revision.badge'] && translations['theme.revision.badge'].message) || 
      'Affects version';

    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process Image components (both flow and text elements - for headings)
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'Image') {
        const attributes = node.attributes || [];
        const srcAttr = attributes.find(attr => attr.name === 'src');
        let src = srcAttr ? srcAttr.value : '';
        
        // Extract optional attributes
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const className = classNameAttr ? classNameAttr.value : '';
        
        const widthAttr = attributes.find(attr => attr.name === 'width');
        const width = widthAttr ? widthAttr.value : '';
        
        const heightAttr = attributes.find(attr => attr.name === 'height');
        const height = heightAttr ? heightAttr.value : '';
        
        const altAttr = attributes.find(attr => attr.name === 'alt');
        const alt = altAttr ? altAttr.value : '';
        
        const hasAlone = attributes.some(attr => attr.name === 'alone');
        
        // Convert to absolute file system path for PDF generation
        if (src && basePath) {
          if (src.startsWith('/img/')) {
            const normalizedSrc = src.replace(/^\/img\//, '');
            src = basePath.replace(/\\/g, '/') + '/static/img/' + normalizedSrc;
          } else if (!src.startsWith('/') && !hasAlone) {
            src = src.replace(/^\.\//, '/img/').replace(/^\.\.\/img\//, '/img/').replace(/^\.\.\//, '/');
            if (!src.startsWith('/')) {
              src = '/img/' + src;
            }
          }
        } else if (src && !src.startsWith('/') && !basePath && !hasAlone) {
          src = src.replace(/^\.\//, '/img/').replace(/^\.\.\/img\//, '/img/').replace(/^\.\.\//, '/');
          if (!src.startsWith('/')) {
            src = '/img/' + src;
          }
        }
        
        const hasCaption = attributes.some(attr => attr.name === 'caption');
        const hasIco = attributes.some(attr => attr.name === 'ico');

        // Helper function to build img properties
        const buildImgProperties = (baseSrc) => {
          const props = { src: baseSrc };
          if (className) props.className = [className];
          if (width) props.width = width;
          if (height) props.height = height;
          if (alt) props.alt = alt;
          return props;
        };

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
                properties: buildImgProperties(src),
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
          const imgProps = buildImgProperties(src);
          if (!imgProps.className) {
            imgProps.className = ['ico'];
          } else {
            imgProps.className.push('ico');
          }
          replacement = {
            type: 'element',
            tagName: 'img',
            properties: imgProps,
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
                properties: buildImgProperties(src),
                children: []
              }
            ]
          };
        }

        if (replacement) {
          parent.children[index] = replacement;
        }
      }

      // Process div components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'div') {
        const attributes = node.attributes || [];
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const className = classNameAttr ? classNameAttr.value : '';

        const replacement = {
          type: 'element',
          tagName: 'div',
          properties: className ? { className: [className] } : {},
          children: node.children || []
        };

        parent.children[index] = replacement;
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

      // Process Table components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Table') {
        const attributes = node.attributes || [];
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const tableClassName = classNameAttr ? classNameAttr.value : '';

        const replacement = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['overflow-x'] },
          children: [
            {
              type: 'element',
              tagName: 'table',
              properties: tableClassName ? { className: [tableClassName] } : {},
              children: node.children || []
            }
          ]
        };

        parent.children[index] = replacement;
      }

      // Process Thead components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Thead') {
        const replacement = {
          type: 'element',
          tagName: 'thead',
          properties: {},
          children: node.children || []
        };

        parent.children[index] = replacement;
      }

      // Process Tbody components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Tbody') {
        const replacement = {
          type: 'element',
          tagName: 'tbody',
          properties: {},
          children: node.children || []
        };

        parent.children[index] = replacement;
      }

      // Process Row (tr) components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Row') {
        const attributes = node.attributes || [];
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const rowClassName = classNameAttr ? classNameAttr.value : '';

        const replacement = {
          type: 'element',
          tagName: 'tr',
          properties: rowClassName ? { className: [rowClassName] } : {},
          children: node.children || []
        };

        parent.children[index] = replacement;
      }

      // Process Th (table header) components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Th') {
        const attributes = node.attributes || [];
        const colspanAttr = attributes.find(attr => attr.name === 'colspan');
        const rowspanAttr = attributes.find(attr => attr.name === 'rowspan');

        const properties = {};
        if (colspanAttr) properties.colspan = parseInt(colspanAttr.value, 10);
        if (rowspanAttr) properties.rowspan = parseInt(rowspanAttr.value, 10);

        const replacement = {
          type: 'element',
          tagName: 'th',
          properties,
          children: node.children || []
        };

        parent.children[index] = replacement;
      }

      // Process Td (table data) components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Td') {
        const attributes = node.attributes || [];
        const colspanAttr = attributes.find(attr => attr.name === 'colspan');
        const rowspanAttr = attributes.find(attr => attr.name === 'rowspan');

        const properties = {};
        if (colspanAttr) properties.colspan = parseInt(colspanAttr.value, 10);
        if (rowspanAttr) properties.rowspan = parseInt(rowspanAttr.value, 10);

        const replacement = {
          type: 'element',
          tagName: 'td',
          properties,
          children: node.children || []
        };

        parent.children[index] = replacement;
      }

      // Process Td (table data) text elements (inside paragraphs)
      if (node.type === 'mdxJsxTextElement' && node.name === 'Td') {
        const attributes = node.attributes || [];
        const colspanAttr = attributes.find(attr => attr.name === 'colspan');
        const rowspanAttr = attributes.find(attr => attr.name === 'rowspan');

        const properties = {};
        if (colspanAttr) properties.colspan = parseInt(colspanAttr.value, 10);
        if (rowspanAttr) properties.rowspan = parseInt(rowspanAttr.value, 10);

        const replacement = {
          type: 'element',
          tagName: 'td',
          properties,
          children: node.children || []
        };

        parent.children[index] = replacement;
      }

      // Process Th (table header) text elements (inside paragraphs)
      if (node.type === 'mdxJsxTextElement' && node.name === 'Th') {
        const attributes = node.attributes || [];
        const colspanAttr = attributes.find(attr => attr.name === 'colspan');
        const rowspanAttr = attributes.find(attr => attr.name === 'rowspan');

        const properties = {};
        if (colspanAttr) properties.colspan = parseInt(colspanAttr.value, 10);
        if (rowspanAttr) properties.rowspan = parseInt(rowspanAttr.value, 10);

        const replacement = {
          type: 'element',
          tagName: 'th',
          properties,
          children: node.children || []
        };

        parent.children[index] = replacement;
      }
    });
  };
}
/**
 * Create a rehype plugin that processes Columns and Column components
 * Converts JSX components to HTML div structure
 * Columns -> <div class="container center columns"><div class="row">...</div></div>
 * Column -> <div class="col">...</div>
 */
export function rehypeProcessColumnsComponent() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process Columns component
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Columns') {
        const attributes = node.attributes || [];
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const styleAttr = attributes.find(attr => attr.name === 'style');

        // Build properties for outer wrapper div
        const outerProps = {
          className: ['container', 'center', 'columns']
        };

        // Build properties for row div
        const rowProps = {
          className: ['row']
        };

        if (classNameAttr) {
          rowProps.className.push(classNameAttr.value);
        }

        if (styleAttr) {
          // Parse inline style if needed
          rowProps.style = styleAttr.value;
        }

        // Create replacement structure: container > row > children
        const replacement = {
          type: 'element',
          tagName: 'div',
          properties: outerProps,
          children: [
            {
              type: 'element',
              tagName: 'div',
              properties: rowProps,
              children: node.children || []
            }
          ]
        };

        parent.children[index] = replacement;
      }

      // Process Column component
      if (node.type === 'mdxJsxFlowElement' && node.name === 'Column') {
        const attributes = node.attributes || [];
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const styleAttr = attributes.find(attr => attr.name === 'style');

        const properties = {
          className: ['col']
        };

        if (classNameAttr) {
          properties.className.push(classNameAttr.value);
        }

        if (styleAttr) {
          properties.style = styleAttr.value;
        }

        const replacement = {
          type: 'element',
          tagName: 'div',
          properties,
          children: node.children || []
        };

        parent.children[index] = replacement;
      }
    });
  };
}