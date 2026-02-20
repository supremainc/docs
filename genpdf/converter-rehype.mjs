/**
 * Markdown to HTML conversion using rehype-mdx-elements
 * Main processor combining remark and rehype plugins
 * 
 * NOTE: Inline HTML <br/> tags are protected during processing by converting them
 * to a placeholder string (!!!BREAKPLACEHOLDER!!!) that survives the markdown/HTML
 * pipeline, then restored in the output. This is necessary because remarkMdx strips
 * bare HTML tags by default.
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkCalloutDirectives from '@microflash/remark-callout-directives';
import remarkRehype from 'remark-rehype';
import codeTitle from "remark-code-title";
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import { rehypeExtendedTable } from 'rehype-extended-table';
import { rehypeMdxElements } from 'rehype-mdx-elements';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import remark plugins
import {
  remarkRemoveComments,
  remarkTransformImagePaths,
  remarkProcessTextDirective,
  remarkTransformDocLinks,
  remarkAddHeadingIds,
  remarkProcessIncludeXclude,
  remarkNormalizeTableStructure,
  remarkProcessFaqs
} from './plugins-remark.mjs';

// Import rehype plugins
import {
  rehypeProcessCmdComponent,
  rehypeAddTargetBlankToExternalLinks,
  rehypeProcessMdxElements,
  rehypeProcessColumnsComponent,
  rehypeAddCalloutIcons,
  rehypeRemoveNoteIndicator,
  rehypeProcessBugListsComponent,
  rehypeProcessNextStepComponent,
  rehypeProcessDocLink,
  rehypeProcessGlossaryComponent,
  rehypeProcessTreeviewComponent
} from './plugins-rehype.mjs';

/**
 * 언어와 타입에 따라 code.json에서 번역문 로드
 */
function loadAdmonitionTexts(language = 'ko') {
  const langMap = {
    ko: 'i18n/ko/code.json',
    en: 'i18n/en/code.json',
    es: 'i18n/es/code.json',
    ja: 'i18n/ja/code.json',
    ru: 'i18n/ru/code.json'
  };

  const filePath = langMap[language] || langMap['ko'];
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    return {
      note: data['theme.admonition.note']?.message || 'Note',
      info: data['theme.admonition.info']?.message || 'Info',
      caution: data['theme.admonition.caution']?.message || 'Caution',
      warning: data['theme.admonition.warning']?.message || 'Warning',
      danger: data['theme.admonition.danger']?.message || 'Danger',
      tip: data['theme.admonition.tip']?.message || 'Tip'
    };
  } catch (error) {
    console.warn(`Failed to load admonition texts for language ${language}:`, error.message);
    return {
      note: 'Note',
      info: 'Info',
      caution: 'Caution',
      warning: 'Warning',
      danger: 'Danger',
      tip: 'Tip'
    };
  }
}

/**
 * Create a unified processor with rehype-mdx-elements support
 * 
 * Plugin order matters:
 * 1. Parse and normalize markdown
 * 2. Process markdown-level transforms (includes, links, headings)
 * 3. Convert to HTML
 * 4. Process HTML-level transforms (components, formatting)
 */
function createProcessor(translations = {}, productOption = '', basePath = '', headingId = '', docPath = '', language = 'ko', docDepth = 0) {
  const admonitionTexts = loadAdmonitionTexts(language);
  
  return unified()
    // Markdown parsing and normalization
    .use(remarkParse, { 
      slateLexer: false,
      // Allow HTML blocks and inline HTML
    })
    .use(remarkGfm)
    .use(remarkMdx)
    .use(remarkDirective)
    .use(remarkCalloutDirectives, {
      aliases: {
        caution: 'deter',
        danger: 'deter',
        important: 'assert',
        info: 'assert',
        tip: 'commend',
        warning: 'warn'
      },
      callouts: {
        note: {
          title: admonitionTexts.note
        },
        assert: {
          title: admonitionTexts.info
        },
        deter: {
          title: admonitionTexts.caution
        },
        warn: {
          title: admonitionTexts.warning
        },
        commend: {
          title: admonitionTexts.tip
        }
      }
    })
    .use(remarkProcessTextDirective)  // Convert accidental textDirective to plain text
    .use(remarkRemoveComments)
    
    // Markdown transformations
    .use(remarkTransformImagePaths, basePath)
    .use(remarkTransformDocLinks, docPath, language)
    .use(remarkAddHeadingIds, headingId)
    .use(remarkProcessIncludeXclude, productOption, '', headingId)
    .use(remarkProcessFaqs, productOption, language)  // Process Faqs component
    .use(remarkNormalizeTableStructure)
    // Convert to HTML
    .use(codeTitle)
    .use(remarkRehype, { 
      passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement'], 
      allowDangerousHtml: true,
      // Preserve HTML elements like <br/>, <hr/>, etc.
      clobberPrefix: ''
    })
    
    // Adjust heading levels based on document depth in hierarchy
    .use(function adjustHeadingLevelsByDepth() {
      return (tree) => {
        visit(tree, 'element', (node) => {
          const match = node.tagName.match(/^h([1-6])$/);
          if (match) {
            const currentLevel = parseInt(match[1]);
            // depth 0: h1→h1, depth 1: h1→h2, depth 2: h1→h3, etc.
            const newLevel = Math.min(currentLevel + docDepth, 6);
            if (newLevel !== currentLevel) {
              node.tagName = `h${newLevel}`;
            }
          }
        });
      };
    })
    
    // HTML transformations
    .use(rehypeExtendedTable)
    .use(rehypeAddTargetBlankToExternalLinks)
    .use(rehypeProcessDocLink, basePath, language)
    .use(rehypeProcessNextStepComponent, language)
    .use(rehypeProcessGlossaryComponent, language)
    .use(rehypeProcessTreeviewComponent, language)
    .use(rehypeProcessMdxElements, translations, basePath, language)
    .use(rehypeProcessCmdComponent, language)
    .use(rehypeProcessColumnsComponent)
    .use(rehypeProcessBugListsComponent)
    .use(rehypeAddCalloutIcons)
    .use(rehypeRemoveNoteIndicator)
    
    // Convert JSX components to HTML
    .use(rehypeMdxElements, {
      allowedElements: ['Image', 'Badge', 'Table', 'Thead', 'Tbody', 'Row', 'Th', 'Td', 'div', 'SpecSection', 'Steps', 'Step', 'Linkto', 'details', 'summary', 'span', 'b'],
      passThrough: ['raw', 'Anno', 'details', 'summary']
    })
    
    // Stringify to HTML
    .use(rehypeStringify, { allowDangerousHtml: true });
}

/**
 * Convert markdown to HTML using rehype-mdx-elements
 * @param {string} mdContent - Markdown content
 * @param {Object} translations - i18n translations object
 * @param {string} productOption - Product filter option (comma-separated)
 * @param {string} basePath - Base path for absolute file paths (for PDF generation)
 * @param {string} headingId - Heading ID for h1 element
 * @param {string} docPath - Full document path (e.g., 'platform/plugins/index')
 * @param {string} language - Language code (ko, en, ja, es, etc.)
 * @param {number} docDepth - Document depth in sidebar hierarchy (0=top-level, 1=first nested, etc.)
 * @returns {Promise<string>} HTML content
 */
export async function markdownToHtml(
  mdContent,
  translations = {},
  productOption = '',
  basePath = '',
  headingId = '',
  docPath = '',
  language = 'ko',
  docDepth = 0
) {
  // Protect <br/> tags by converting to a safe marker that survives processing
  const BR_PLACEHOLDER = '!!!BREAKPLACEHOLDER!!!';
  const hasBr = mdContent.includes('<br');
  let processedContent = mdContent;
  let brCount = 0;
  
  if (hasBr) {
    // Replace all br tag variations
    processedContent = mdContent.replace(/<br\s*\/?>/gi, () => {
      brCount++;
      return BR_PLACEHOLDER;
    });
  }
  
  const processor = createProcessor(translations, productOption, basePath, headingId, docPath, language, docDepth);
  
  try {
    const file = await processor.process(processedContent);
    let output = file.value;
    
    // Restore <br/> tags - unwrap any formatting tags that may have been added around br
    if (hasBr && brCount > 0) {
      // Keep unwrapping until no more changes
      let maxIterations = 10;
      while (maxIterations-- > 0) {
        const before = output;
        
        // Remove <tag><br/></tag> patterns
        output = output.replace(/<em><strong><br\/><\/strong><\/em>/g, '<br/>');
        output = output.replace(/<strong><br\/><\/strong>/g, '<br/>');
        output = output.replace(/<em><br\/><\/em>/g, '<br/>');
        output = output.replace(/<[a-z]+><br\/><\/[a-z]+>/gi, '<br/>');
        output = output.replace(/<[a-z]+[^>]*><br\/><\/[a-z]+>/gi, '<br/>');
        
        // Replace any remaining placeholders - including partial/corrupted ones
        output = output.replace(/!!!<br\/>!!!/g, '<br/>');  // Handle corrupted placeholder
        output = output.replace(/BREAKPLACEHOLDER/g, '<br/>');
        output = output.replace(/!!!BREAKPLACEHOLDER!!!/g, '<br/>');
        
        if (before === output) break; // No more changes
      }
    }
    
    return output;
  } catch (error) {
    console.error('Error processing markdown:', error.message);
    return '';
  }
}
