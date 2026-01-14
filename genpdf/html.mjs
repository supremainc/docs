/**
 * HTML generation functions
 */

import { escapeHtml, extractHeadingsFromMarkdown } from './utils.mjs';
import { markdownToHtml } from './converter.mjs';
import { getTemplateCSS } from './config.mjs';

/**
 * Generate table of contents HTML
 * @param {Array<Object>} mdxFiles - Array of loaded MDX files
 * @param {number} maxDepth - Maximum heading depth for TOC
 * @returns {string} TOC HTML
 */
export function generateTableOfContents(mdxFiles, maxDepth = 3) {
  let tocHtml = '<nav class="toc" id="toc">\n<h2>목차</h2>\n<ul>\n';

  mdxFiles.forEach(file => {
    if (!file) return;
    
    const docTitle = file.frontmatter.title || file.docId;
    tocHtml += `<li><a href="#${file.headingId}">${escapeHtml(docTitle)}</a>`;

    // Add headings from content if depth allows
    if (maxDepth > 1) {
      const headings = file.headings || [];
      const filteredHeadings = headings.filter(h => h.depth <= maxDepth);
      
      if (filteredHeadings.length > 0) {
        tocHtml += '\n<ul>\n';
        filteredHeadings.forEach(heading => {
          const indent = '  '.repeat(Math.max(0, heading.depth - 2));
          tocHtml += `${indent}<li><a href="#${heading.id}">${escapeHtml(heading.text)}</a></li>\n`;
        });
        tocHtml += '</ul>\n';
      }
    }

    tocHtml += '</li>\n';
  });

  tocHtml += '</ul>\n</nav>\n';
  return tocHtml;
}

/**
 * Build complete HTML document
 * @param {Array<Object>} mdxFiles - Array of loaded MDX files
 * @param {string} title - Document title
 * @param {Object} options - Generation options (template, toc, maxDepth, language, product, translations)
 * @returns {string} Complete HTML
 */
export function buildHtmlDocument(mdxFiles, title, options = {}) {
  const {
    template = 'professional',
    toc = true,
    maxDepth = 3,
    language = 'ko',
    product = '',
    translations = {}
  } = options;

  const contentSections = mdxFiles.map(file => {
    if (!file) return '';
    
    const docTitle = file.frontmatter.title || file.docId;
    const content = markdownToHtml(file.content, translations, product);
    
    return `
    <section class="doc-section" id="${file.headingId}">
      <h1>${escapeHtml(docTitle)}</h1>
      ${file.frontmatter.description ? `<p class="description">${escapeHtml(file.frontmatter.description)}</p>` : ''}
      <div class="doc-content">
        ${content}
      </div>
    </section>
    `;
  }).filter(Boolean).join('\n');

  const css = getTemplateCSS(template);
  const tocHtml = toc ? generateTableOfContents(mdxFiles, maxDepth) : '';

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
        ${contentSections}
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
