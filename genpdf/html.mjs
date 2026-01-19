/**
 * HTML generation functions
 */

import { escapeHtml, extractHeadingsFromMarkdown } from './utils.mjs';
import { markdownToHtml } from './converter-rehype.mjs';
import { getTemplateCSS } from './config.mjs';

/**
 * Extract headings from generated HTML content
 * @param {string} htmlContent - HTML content to extract headings from
 * @param {number} maxDepth - Maximum heading depth for TOC (relative depth)
 * @returns {Array<Object>} Array of heading objects with id, text, and depth
 */
function extractHeadingsFromHtml(htmlContent, maxDepth = 3) {
  const headings = [];
  
  // Match all h1-h6 tags with id attributes
  const hRegex = /<h([1-6])\s+id="([^"]+)">([^<]*)<\/h\1>/g;
  let match;
  
  while ((match = hRegex.exec(htmlContent)) !== null) {
    const htmlDepth = parseInt(match[1]);
    headings.push({
      depth: htmlDepth - 1, // Convert h1→0, h2→1, h3→2, etc. for easier nesting
      id: match[2],
      text: match[3].trim()
    });
  }
  
  if (headings.length === 0) return [];
  
  // Filter by maxDepth (only include up to specified depth level)
  const effectiveMaxDepth = Math.min(maxDepth, 5); // h1-h6 = depth 0-5
  
  return headings.filter(h => h.depth <= effectiveMaxDepth);
}

/**
 * Generate table of contents HTML from extracted headings
 * @param {Array<Object>} headings - Array of heading objects with id, text, depth
 * @returns {string} TOC HTML
 */
function generateTocFromHeadings(headings) {
  if (headings.length === 0) return '';
  
  let html = '<ul>\n';
  let currentDepth = 0;
  
  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const nextHeading = i + 1 < headings.length ? headings[i + 1] : null;
    const nextDepth = nextHeading ? nextHeading.depth : 0;
    
    const item = `<li><a href="#${heading.id}">${escapeHtml(heading.text)}</a>`;
    
    // Open new levels if going deeper
    if (heading.depth > currentDepth) {
      for (let d = currentDepth; d < heading.depth; d++) {
        html += '<ul>\n';
      }
      currentDepth = heading.depth;
    }
    // Close levels if going shallower
    else if (heading.depth < currentDepth) {
      for (let d = heading.depth; d < currentDepth; d++) {
        html += '</li>\n</ul>\n';
      }
      html += '</li>\n';
      currentDepth = heading.depth;
    }
    // Same level - close previous item
    else if (i > 0) {
      html += '</li>\n';
    }
    
    // Add item
    html += item;
    
    // Look ahead to close if next is shallower or same
    if (!nextHeading || nextDepth <= heading.depth) {
      // Will be handled in next iteration or at end
    }
  }
  
  // Close all remaining open tags
  while (currentDepth >= 0) {
    html += '</li>\n</ul>\n';
    currentDepth--;
  }
  
  return html;
}

/**
 * Generate table of contents HTML from generated content HTML
 * @param {string} contentHtml - Complete content HTML with all documents
 * @param {number} maxDepth - Maximum heading depth for TOC
 * @returns {string} TOC HTML
 */
export function generateTableOfContents(contentHtml, maxDepth = 3) {
  const headings = extractHeadingsFromHtml(contentHtml, maxDepth);
  const tocContent = generateTocFromHeadings(headings);
  
  return `<nav class="toc" id="toc">\n<h2>목차</h2>\n${tocContent}</nav>\n`;
}

/**
 * Build complete HTML document
 * @param {Array<Object>} mdxFiles - Array of loaded MDX files
 * @param {string} title - Document title
 * @param {Object} options - Generation options (template, toc, maxDepth, language, product, translations, basePath)
 * @returns {Promise<string>} Complete HTML
 */
export async function buildHtmlDocument(mdxFiles, title, options = {}) {
  const {
    template = 'professional',
    toc = true,
    maxDepth = 3,
    language = 'ko',
    product = '',
    translations = {},
    basePath = ''
  } = options;

  const contentSections = [];
  for (const file of mdxFiles) {
    if (!file) continue;
    
    const docTitle = file.frontmatter.title || file.docId;
    // Use frontmatter.id if available, otherwise extract from docId
    const h1Id = file.frontmatter.id || file.docId.split('/').pop();
    // Pass depth information to markdown converter for heading level adjustment
    const docDepth = file.depth || 0;
    const content = await markdownToHtml(file.content, translations, product, basePath, h1Id, file.docId, language, docDepth);
    
    // Calculate heading level based on document depth in sidebar hierarchy
    // depth 0 = h1, depth 1 = h2, depth 2 = h3, etc.
    // Limit to h6 (maximum HTML heading level)
    const headingLevel = Math.min(1 + docDepth, 6);
    const headingTag = `h${headingLevel}`;
    
    contentSections.push(`
    <section class="doc-section" id="${file.headingId}">
      <${headingTag} id="${h1Id}">${escapeHtml(docTitle)}</${headingTag}>
      ${file.frontmatter.description ? `<p class="description">${escapeHtml(file.frontmatter.description)}</p>` : ''}
      <div class="doc-content">
        ${content}
      </div>
    </section>
    `);
  }

  const contentHtml = contentSections.filter(Boolean).join('\n');

  const css = getTemplateCSS(template);
  // Generate TOC after content HTML is created, from actual rendered headings
  const tocHtml = toc ? generateTableOfContents(contentHtml, maxDepth) : '';

  const html = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <style>
${css}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${escapeHtml(title)}</h1>
      <p>생성: ${new Date().toLocaleString('ko-KR')}</p>
    </header>

    <div class="layout">
      ${tocHtml}
      
      <main class="content">
        ${contentHtml}
      </main>
    </div>

    <footer>
      <p>이 문서는 여러 개의 MDX 파일로부터 자동으로 생성되었습니다.</p>
      <p>생성 시간: ${new Date().toLocaleString('ko-KR')}</p>
    </footer>
  </div>

  <button class="back-to-top" id="backToTop" title="맨 위로">↑</button>

  <script>
    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>
</body>
</html>`;

  return html;
}
