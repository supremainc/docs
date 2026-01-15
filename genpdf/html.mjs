/**
 * HTML generation functions
 */

import { escapeHtml, extractHeadingsFromMarkdown } from './utils.mjs';
import { markdownToHtml } from './converter-rehype.mjs';
import { getTemplateCSS } from './config.mjs';

/**
 * Extract headings from generated HTML content
 * @param {string} htmlContent - HTML content to extract headings from
 * @param {number} maxDepth - Maximum heading depth
 * @returns {Array<Object>} Array of heading objects with id, text, and depth (relative to max depth)
 */
function extractHeadingsFromHtml(htmlContent, maxDepth = 3) {
  const headings = [];
  
  // Match all h1-h6 tags with id attributes
  const hRegex = /<h([1-6])\s+id="([^"]+)">([^<]*)<\/h\1>/g;
  let match;
  const allHeadings = [];
  
  while ((match = hRegex.exec(htmlContent)) !== null) {
    allHeadings.push({
      depth: parseInt(match[1]),
      id: match[2],
      text: match[3].trim()
    });
  }
  
  if (allHeadings.length === 0) return [];
  
  // Filter headings based on maxDepth, keeping h1 as baseline
  const minDepth = 1; // Always include h1
  const effectiveMaxDepth = Math.min(maxDepth, 6);
  
  for (const heading of allHeadings) {
    if (heading.depth === minDepth) {
      // Always include h1
      headings.push(heading);
    } else if (heading.depth <= effectiveMaxDepth) {
      // Include h2-h3 (or up to maxDepth)
      headings.push(heading);
    }
  }
  
  return headings;
}

/**
 * Generate table of contents HTML from extracted headings
 * @param {Array<Object>} headings - Array of heading objects with id, text, depth
 * @returns {string} TOC HTML
 */
function generateTocFromHeadings(headings) {
  if (headings.length === 0) return '';
  
  let tocHtml = '';
  let lastDepth = 0;
  
  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const nextHeading = i + 1 < headings.length ? headings[i + 1] : null;
    const nextDepth = nextHeading ? nextHeading.depth : 0;
    
    // Close lists if we're going up (decreasing depth)
    while (lastDepth > heading.depth) {
      tocHtml += '</li>\n</ul>\n';
      lastDepth--;
    }
    
    // Close previous item if at same level
    if (lastDepth === heading.depth && lastDepth > 0) {
      tocHtml += '</li>\n';
    }
    
    // Open new lists if we're going down (increasing depth)
    while (lastDepth < heading.depth) {
      tocHtml += '<ul>\n';
      lastDepth++;
    }
    
    // Add the heading
    tocHtml += `<li><a href="#${heading.id}">${escapeHtml(heading.text)}</a>`;
    
    // If next item is not deeper, close the li tag
    if (nextDepth < heading.depth || nextDepth === 0) {
      tocHtml += '</li>\n';
      lastDepth = heading.depth;
    }
  }
  
  // Close all remaining open lists
  while (lastDepth > 0) {
    if (lastDepth > 1) {
      tocHtml += '</li>\n';
    }
    tocHtml += '</ul>\n';
    lastDepth--;
  }
  
  return tocHtml;
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
    const content = await markdownToHtml(file.content, translations, product, basePath, h1Id, file.docId, language);
    
    contentSections.push(`
    <section class="doc-section" id="${file.headingId}">
      <h1 id="${h1Id}">${escapeHtml(docTitle)}</h1>
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
