/**
 * Rehype plugins for HTML processing
 * These plugins process the HTML AST after conversion from markdown
 */

import { visit } from 'unist-util-visit';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';

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

// i18n code.json for spec labels and translations
const codeKo = JSON.parse(readFileSync(`${__dirname}/../i18n/ko/code.json`, 'utf-8'));
const codeEn = JSON.parse(readFileSync(`${__dirname}/../i18n/en/code.json`, 'utf-8'));
const codeEs = JSON.parse(readFileSync(`${__dirname}/../i18n/es/code.json`, 'utf-8'));
const codeJa = JSON.parse(readFileSync(`${__dirname}/../i18n/ja/code.json`, 'utf-8'));

/**
 * Helper function to create AST nodes for SpecSection
 * Directly builds rehype AST matching React component structure
 */
function buildSpecSectionAst(data, language = 'ko') {
  if (!data) {
    console.warn('⚠️  No data in SpecSection');
    return null;
  }

  // Log data structure to understand the issue
  // console.log('📊 Data structure:', {
  //   keys: Object.keys(data),
  //   hasItems: !!data.items,
  //   dataType: typeof data
  // });

  // Data is now a single section: { label: "...", label_id: "...", items: { ... } }
  if (!data.items || typeof data.items !== 'object') {
    console.warn('⚠️  No items in section data');
    return null;
  }

  /**
   * Translate function: Get translated text from i18n code.json
   * @param {string} id - Translation key (e.g., "specs.credentials")
   * @returns {string} Translated text or key as fallback
   */
  const translate = (id) => {
    const codeMap = {
      ko: codeKo,
      en: codeEn,
      es: codeEs,
      ja: codeJa
    };
    
    const codeFile = codeMap[language] || codeKo;
    
    if (!codeFile || !codeFile[id]) {
      // Fallback: return the key itself if translation not found
      return id;
    }
    
    const translationObj = codeFile[id];
    if (typeof translationObj === 'object' && translationObj.message) {
      return translationObj.message;
    }
    
    return id;
  };

  /**
   * Parse HTML string to AST nodes
   */
  const parseHtmlToAst = (htmlString) => {
    if (!htmlString || typeof htmlString !== 'string') return [];
    try {
      const ast = unified()
        .use(rehypeParse, { fragment: true })
        .parse(htmlString);
      return ast.children || [];
    } catch (error) {
      console.error('❌ HTML parsing error:', error.message);
      return [{ type: 'text', value: htmlString }];
    }
  };

  /**
   * Detect if string contains HTML tags
   */
  const isHtmlString = (str) => {
    if (typeof str !== 'string') return false;
    return /<[a-z][\s\S]*>/i.test(str);
  };

  /**
   * Build annotation sup element
   */
  const buildAnnotationSup = (id) => {
    if (!id) return null;
    return {
      type: 'element',
      tagName: 'sup',
      properties: { id: `${id}_dest` },
      children: [
        {
          type: 'element',
          tagName: 'a',
          properties: { href: `#${id}` },
          children: []
        }
      ]
    };
  };

  /**
   * Build list items from array or object values
   */
  const buildListItems = (items) => {
    if (!items) return [];
    const itemsList = Array.isArray(items) ? items : Object.values(items);
    return itemsList.map(item => ({
      type: 'element',
      tagName: 'li',
      properties: {},
      children: typeof item === 'string' ? [{ type: 'text', value: item }] : [{ type: 'text', value: String(item) }]
    }));
  };

  /**
   * Build AST nodes for value content
   */
  const buildValueChildren = (value) => {
    if (value === null || value === undefined) return [{ type: 'text', value: '' }];

    if (typeof value === 'string') {
      // Check if string contains HTML tags
      if (isHtmlString(value)) {
        // Parse HTML and wrap in <p>
        const parsedNodes = parseHtmlToAst(value);
        return [
          {
            type: 'element',
            tagName: 'p',
            properties: {},
            children: parsedNodes
          }
        ];
      }
      
      return [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [{ type: 'text', value }]
        }
      ];
    }

    if (typeof value === 'boolean') {
      const text = value ? translate('specs.common.supported') : translate('specs.common.Notsupported');
      return [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [{ type: 'text', value: text }]
        }
      ];
    }

    if (Array.isArray(value)) {
      return [
        {
          type: 'element',
          tagName: 'ul',
          properties: {},
          children: buildListItems(value)
        }
      ];
    }

    if (typeof value === 'object' && value[language]) {
      return buildValueChildren(value[language]);
    }

    if (typeof value === 'object' && value.ko) {
      return buildValueChildren(value.ko);
    }

    return [{ type: 'text', value: '' }];
  };

  /**
   * Build AST for a single item within a section
   */
  const buildItemNode = (item) => {
    const rowChildren = [];

    // Header - use label_id for translation if available, otherwise use label
    let headerLabel = item.label_id ? translate(item.label_id) : (item.label || '레이블 없음');
    // console.log('    📝 Building item:', headerLabel, '| type:', item.type);
    
    // Build header children with annotation support
    const headerChildren = [{ type: 'text', value: headerLabel }];
    if (item.annotation_label) {
      const annotSup = buildAnnotationSup(item.annotation_label);
      if (annotSup) headerChildren.push(annotSup);
    }
    
    rowChildren.push({
      type: 'element',
      tagName: 'div',
      properties: { className: ['techspecsRowheader'] },
      children: headerChildren
    });

    // Body
    const bodyChildren = [];

    if (item.type === 'model' && item.items) {
      // Model type: key-value pairs
      Object.values(item.items).forEach(subitem => {
        // Build left column with label and optional annotation
        let leftLabel = subitem.label_id ? translate(subitem.label_id) : (subitem.label || '');
        
        const leftChildren = isHtmlString(leftLabel) ?
          parseHtmlToAst(leftLabel) :
          [{ type: 'text', value: leftLabel }];
        
        // Build right column children
        const rightChildren = buildValueChildren(subitem.value);
        if (subitem.annotation_value) {
          const annotSup = buildAnnotationSup(subitem.annotation_value);
          if (annotSup) rightChildren.push(annotSup);
        }
        
        bodyChildren.push({
          type: 'element',
          tagName: 'div',
          properties: { className: ['row'] },
          children: [
            {
              type: 'element',
              tagName: 'div',
              properties: { className: ['column', 'small_l1'] },
              children: leftChildren
            },
            {
              type: 'element',
              tagName: 'div',
              properties: { className: ['column', 'small_l2'] },
              children: rightChildren
            }
          ]
        });
      });
    } else if (item.type === 'biometric' && item.items) {
      // Biometric type with credential types (face, fingerprint, etc.)
      Object.values(item.items).forEach(subitem => {
        if (subitem.type === 'face' || subitem.type === 'fingerprint') {
          // Show the credential type label with badge
          const credLabel = subitem.label_id ? translate(subitem.label_id) : (subitem.label || '');
          const credChildren = [{ type: 'text', value: credLabel }];
          
          // Add badge if present
          if (subitem.badge) {
            credChildren.push({
              type: 'element',
              tagName: 'span',
              properties: { className: ['badge', 'only'] },
              children: [{ type: 'text', value: subitem.badge }]
            });
          }
          
          bodyChildren.push({
            type: 'element',
            tagName: 'div',
            properties: { className: ['biometric-item'] },
            children: [
              {
                type: 'element',
                tagName: 'p',
                properties: { className: ['credential-type'] },
                children: credChildren
              }
            ]
          });

          // Show nested items (auth_distance, auth_height, etc.)
          if (subitem.items) {
            const featureList = [];
            Object.values(subitem.items).forEach(feature => {
              let featureLabel = feature.label_id ? translate(feature.label_id) : (feature.label || '');
              const featureValue = buildValueChildren(feature.value);
              
              // Build label with annotation if present
              const labelChildren = [{ type: 'text', value: featureLabel }];
              if (feature.annotation_label) {
                const annotSup = buildAnnotationSup(feature.annotation_label);
                if (annotSup) labelChildren.push(annotSup);
              }
              labelChildren.push({ type: 'text', value: ':' });
              
              const featureChildren = [
                {
                  type: 'element',
                  tagName: 'strong',
                  properties: {},
                  children: labelChildren
                },
                ...featureValue
              ];
              
              featureList.push({
                type: 'element',
                tagName: 'div',
                properties: { className: ['feature'] },
                children: featureChildren
              });
            });
            bodyChildren.push(...featureList);
          }
        }
      });
    } else if (!item.type && item.items) {
      // Default type with items - usually just display the items
      Object.values(item.items).forEach(subitem => {
        let sublabel = subitem.label_id ? translate(subitem.label_id) : (subitem.label || '');
        const subvalue = buildValueChildren(subitem.value);
        
        // Add annotation if present
        if (subitem.annotation_value) {
          const annotSup = buildAnnotationSup(subitem.annotation_value);
          if (annotSup) subvalue.push(annotSup);
        }
        
        bodyChildren.push({
          type: 'element',
          tagName: 'div',
          properties: { className: ['item-row'] },
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['item-label'] },
              children: [{ type: 'text', value: sublabel + ':' }]
            },
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['item-value'] },
              children: subvalue
            }
          ]
        });
      });
    } else if (!item.type && item.value !== undefined) {
      // Default type with direct value
      const valueChildren = buildValueChildren(item.value);
      
      // Add annotation if present
      if (item.annotation_value) {
        const annotSup = buildAnnotationSup(item.annotation_value);
        if (annotSup) valueChildren.push(annotSup);
      }
      
      bodyChildren.push(...valueChildren);
    }

    rowChildren.push({
      type: 'element',
      tagName: 'div',
      properties: { className: ['techspecsBody'] },
      children: bodyChildren.length > 0 ? bodyChildren : [{ type: 'text', value: '' }]
    });

    return {
      type: 'element',
      tagName: 'div',
      properties: { className: ['techspecSection'] },
      children: rowChildren
    };
  };

  /**
   * Build all items from the current section
   */
  const allItems = [];
  Object.values(data.items).forEach(item => {
    allItems.push(buildItemNode(item));
  });

  console.log('✓ Built', allItems.length, 'item nodes');

  // Build heading node for the section (matching Specs/index.js Head component)
  const headingLabel = data.label_id ? translate(data.label_id) : (data.label || data.label_id);
  const headingNode = {
    type: 'element',
    tagName: 'h3',
    properties: { 
      id: data.label_id,
      className: ['spec-heading']
    },
    children: [{ 
      type: 'text', 
      value: headingLabel
    }]
  };

  return {
    type: 'element',
    tagName: 'div',
    properties: { className: ['techspec'] },
    children: [
      headingNode,
      {
        type: 'element',
        tagName: 'div',
        properties: { className: ['techspec-content'] },
        children: allItems.length > 0 ? allItems : [{ type: 'text', value: 'No specifications available' }]
      }
    ]
  };
}

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
export function rehypeProcessMdxElements(translations = {}, basePath = '', language = 'ko') {
  return (tree) => {
    const figureCaptionText = 
      (translations['theme.figureCaption.desc'] && translations['theme.figureCaption.desc'].message) || 
      '위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다.';
    
    const revisionLabel = 
      (translations['theme.revision.badge'] && translations['theme.revision.badge'].message) || 
      'Affects version';

    visit(tree, (node, index, parent) => {
      if (!node || !parent || index === null) return;

      // Process PageBreak components - convert to div with page-break class
      if (node.type === 'mdxJsxFlowElement' && node.name === 'PageBreak') {
        const pageBreakNode = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['page-break'] },
          children: []
        };
        
        parent.children[index] = pageBreakNode;
        return;
      }

      // Process Anno components (annotation references) - can be either flow or text element
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'Anno') {
        const attributes = node.attributes || [];
        const idAttr = attributes.find(attr => attr.name === 'id');
        
        // console.log('ℹ️  Processing Anno component:', { id: idAttr?.value, childrenCount: node.children?.length });
        
        if (idAttr && idAttr.value) {
          const annoId = idAttr.value;
          const childText = node.children?.[0]?.value || '';
          
          // console.log('   ✓ Anno created:', { id: annoId, text: childText });
          
          // Convert <Anno id="anno1">1)</Anno> to <span id='anno1'><a href='#anno1_dest'>1)</a></span>
          const annoNode = {
            type: 'element',
            tagName: 'span',
            properties: { id: annoId, className: ['annotation'] },
            children: [
              {
                type: 'element',
                tagName: 'a',
                properties: { href: `#${annoId}_dest` },
                children: [
                  { type: 'text', value: childText }
                ]
              }
            ]
          };
          
          parent.children[index] = annoNode;
          return;
        }
      }

      // Process SpecSection components
      if (node.type === 'mdxJsxFlowElement' && node.name === 'SpecSection') {
        console.log('ℹ️  Processing SpecSection:', node.attributes?.map(a => `${a.name}=${a.value?.substring(0, 50)}...`).join(','));
        const attributes = node.attributes || [];
        
        // Try to find data attribute (direct) or _jsonData attribute (base64-encoded from loader)
        let dataAttr = attributes.find(attr => attr.name === 'data');
        let jsonDataAttr = attributes.find(attr => attr.name === '_jsonData');
        
        let data = null;
        
        if (dataAttr) {
          try {
            // Direct data attribute processing
            if (dataAttr.type === 'mdxJsxAttributeValueExpression') {
              data = dataAttr.value;
            } else if (typeof dataAttr.value === 'string') {
              data = JSON.parse(dataAttr.value);
            }
          } catch (error) {
            console.warn('⚠️  Failed to parse data attribute:', error.message);
          }
        } else if (jsonDataAttr && jsonDataAttr.value) {
          try {
            // Base64-encoded data from loader
            const base64String = jsonDataAttr.value;
            console.log('ℹ️  Decoding base64 data...');
            const jsonString = Buffer.from(base64String, 'base64').toString('utf-8');
            data = JSON.parse(jsonString);
            console.log('✓ SpecSection data decoded successfully');
          } catch (error) {
            console.warn('⚠️  Failed to decode _jsonData:', error.message);
          }
        }
        
        if (data) {
          try {
            // Log data structure to understand the format
            // console.log('📋 Data structure:', {
            //   keys: Object.keys(data),
            //   biostation3Keys: data.biostation3 ? Object.keys(data.biostation3) : 'N/A'
            // });
            
            // Check if data is wrapped in product key (e.g., { biostation3: { items: {...} }, xpass2: { items: {...} } })
            let specData = data;
            if (!data.items) {
              // Dynamically find the product key (biostation3, xpass2, etc.)
              for (const key in data) {
                if (data[key] && typeof data[key] === 'object' && data[key].items) {
                  specData = data[key];
                  // console.log(`📍 Using ${key} as spec data`);
                  break;
                }
              }
            }
            
            // Build AST nodes directly from React component structure
            const astNode = buildSpecSectionAst(specData, language);
            
            if (astNode) {
              parent.children[index] = astNode;
              // console.log('✓ SpecSection AST built and rendered');
            } else {
              // console.warn('⚠️  buildSpecSectionAst returned null');
            }
          } catch (error) {
            console.warn('⚠️  Failed to build SpecSection AST:', error.message);
            console.warn(error.stack);
          }
        }
        return;
      }

      // Process Image components (both flow and text elements - for headings)
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'Image') {
        const attributes = node.attributes || [];
        const srcAttr = attributes.find(attr => attr.name === 'src');
        let src = srcAttr ? srcAttr.value : '';
        
        // Extract optional attributes
        const classNameAttr = attributes.find(attr => attr.name === 'className');
        const className = classNameAttr ? classNameAttr.value : '';
        
        const widthAttr = attributes.find(attr => attr.name === 'width');
        let width = '';
        if (widthAttr) {
          if (typeof widthAttr.value === 'string') {
            width = widthAttr.value.replace(/px$/, '');
          } else if (typeof widthAttr.value === 'number') {
            width = String(widthAttr.value);
          } else if (typeof widthAttr.value === 'object' && widthAttr.value && widthAttr.value.value !== undefined) {
            // Handle mdxJsxAttributeValueExpression: { value: 220, type: '...' }
            width = String(widthAttr.value.value);
          }
        }
        
        const heightAttr = attributes.find(attr => attr.name === 'height');
        let height = '';
        if (heightAttr) {
          if (typeof heightAttr.value === 'string') {
            height = heightAttr.value.replace(/px$/, '');
          } else if (typeof heightAttr.value === 'number') {
            height = String(heightAttr.value);
          } else if (typeof heightAttr.value === 'object' && heightAttr.value && heightAttr.value.value !== undefined) {
            // Handle mdxJsxAttributeValueExpression: { value: 220, type: '...' }
            height = String(heightAttr.value.value);
          }
        }
        
        const altAttr = attributes.find(attr => attr.name === 'alt');
        const alt = altAttr ? altAttr.value : '';
        
        const hasAlone = attributes.some(attr => attr.name === 'alone');
        
        // Convert to absolute file system path for PDF generation
        if (src && basePath) {
          if (src.startsWith('/img/')) {
            const normalizedSrc = src.replace(/^\/img\//, '');
            // alone 속성이 없으면 언어 폴더 추가
            if (!hasAlone) {
              src = basePath.replace(/\\/g, '/') + '/static/img/' + 'en' + '/' + normalizedSrc;
            } else {
              src = basePath.replace(/\\/g, '/') + '/static/img/' + normalizedSrc;
            }
          } else if (!src.startsWith('/') && !hasAlone) {
            src = src.replace(/^\.\//, '/img/').replace(/^\.\.\/img\//, '/img/').replace(/^\.\.\//, '/');
            if (!src.startsWith('/')) {
              src = '/img/' + language + '/' + src;
            }
          }
        } else if (src && !src.startsWith('/') && !basePath && !hasAlone) {
          src = src.replace(/^\.\//, '/img/').replace(/^\.\.\/img\//, '/img/').replace(/^\.\.\//, '/');
          if (!src.startsWith('/')) {
            src = '/img/' + language + '/' + src;
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
          tagName: 'table',
          properties: tableClassName ? { className: [tableClassName] } : {},
          children: node.children || []
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

/**
 * Rehype plugin to add SVG icons to callout hint elements
 */
export function rehypeAddCalloutIcons() {
  const iconMap = {
    'callout-note': '<svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"></path></svg>',
    'callout-assert': '<svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>',
    'callout-deter': '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>',
    'callout-warn': '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="#A32343" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert mr-2 text-red-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" fill="none"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
    'callout-commend': '<svg viewBox="0 0 14 16"><path fillRule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h4v3l4-3h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9h-4v2l-3-2H1V2h12v8z"/></svg>'
  };

  return (tree) => {
    visit(tree, 'element', (node) => {
      // Find callout-hint elements within callout asides
      if (node.tagName === 'aside' && node.properties?.className?.includes('callout')) {
        // Get the callout type from className
        const calloutClass = node.properties.className.find((c) => c.startsWith('callout-'));
        
        if (calloutClass && iconMap[calloutClass]) {
          // Recursively find and update callout-hint
          visit(node, 'element', (child) => {
            if (child.tagName === 'div' && child.properties?.className?.includes('callout-hint')) {
              // Add SVG as an HTML element
              child.children = [
                {
                  type: 'raw',
                  value: iconMap[calloutClass]
                }
              ];
              return false; // Don't visit children
            }
          });
        }
      }
    });
  };
}

/**
 * Rehype plugin to remove callout-title from note type callouts
 */
export function rehypeRemoveNoteIndicator() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Find callout-note asides and remove callout-title from callout-indicator
      if (node.tagName === 'aside' && node.properties?.className?.includes('callout-note')) {
        visit(node, 'element', (child) => {
          // Find callout-indicator and remove callout-title from its children
          if (child.tagName === 'div' && child.properties?.className?.includes('callout-indicator')) {
            child.children = child.children.filter(
              (grandchild) => !(grandchild.tagName === 'div' && grandchild.properties?.className?.includes('callout-title'))
            );
            return false; // Don't visit children
          }
        });
      }
    });
  };
}