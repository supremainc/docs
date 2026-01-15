/**
 * Markdown to HTML conversion using rehype-mdx-elements
 * Main processor combining remark and rehype plugins
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkDirective from 'remark-directive';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypeMdxElements } from 'rehype-mdx-elements';

// Import remark plugins
import {
  remarkRemoveComments,
  remarkTransformImagePaths,
  remarkTransformDocLinks,
  remarkAddHeadingIds,
  remarkProcessIncludeXclude,
  remarkDirectiveToAdmonition,
  remarkNormalizeTableStructure
} from './plugins-remark.mjs';

// Import rehype plugins
import {
  rehypeAddAdmonitionIcons,
  rehypeProcessAdmonitions,
  rehypeProcessCmdComponent,
  rehypeAddTargetBlankToExternalLinks,
  rehypeProcessMdxElements
} from './plugins-rehype.mjs';

/**
 * Create a unified processor with rehype-mdx-elements support
 * 
 * Plugin order matters:
 * 1. Parse and normalize markdown
 * 2. Process markdown-level transforms (includes, links, headings)
 * 3. Convert to HTML
 * 4. Process HTML-level transforms (components, formatting)
 */
function createProcessor(translations = {}, productOption = '', basePath = '', headingId = '', docPath = '', language = 'ko') {
  return unified()
    // Markdown parsing and normalization
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkDirective)
    .use(remarkDirectiveToAdmonition)
    .use(remarkRemoveComments)
    
    // Markdown transformations
    .use(remarkTransformImagePaths, basePath)
    .use(remarkTransformDocLinks, docPath, language)
    .use(remarkAddHeadingIds, headingId)
    .use(remarkProcessIncludeXclude, productOption)
    .use(remarkNormalizeTableStructure)
    
    // Code highlighting
    .use(remarkPrism)
    
    // Convert to HTML
    .use(remarkRehype, { passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement'] })
    
    // HTML transformations
    .use(rehypeAddAdmonitionIcons, translations)
    .use(rehypeProcessAdmonitions)
    .use(rehypeAddTargetBlankToExternalLinks)
    .use(rehypeProcessMdxElements, translations, basePath)
    .use(rehypeProcessCmdComponent, language)
    
    // Convert JSX components to HTML
    .use(rehypeMdxElements, {
      allowedElements: ['Image', 'Badge', 'Table', 'Thead', 'Tbody', 'Row', 'Th', 'Td']
    })
    
    // Stringify to HTML
    .use(rehypeStringify);
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
 * @returns {Promise<string>} HTML content
 */
export async function markdownToHtml(
  mdContent,
  translations = {},
  productOption = '',
  basePath = '',
  headingId = '',
  docPath = '',
  language = 'ko'
) {
  const processor = createProcessor(translations, productOption, basePath, headingId, docPath, language);
  
  try {
    const file = await processor.process(mdContent);
    return file.value;
  } catch (error) {
    console.error('Error processing markdown:', error.message);
    return '';
  }
}
