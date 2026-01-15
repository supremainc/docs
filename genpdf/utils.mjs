/**
 * Utility functions
 */

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
export function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, char => map[char]);
}

/**
 * Generate ID from heading text
 * @param {string} text - Heading text
 * @returns {string} Generated ID
 */
export function generateHeadingId(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Extract text content from AST node
 * @param {Object} node - AST node
 * @returns {string} Extracted text
 */
export function extractText(node) {
  if (node.type === 'text') return node.value;
  if (node.children) {
    return node.children.map(extractText).join('');
  }
  return '';
}

/**
 * Extract headings from markdown content without full AST parsing
 * @param {string} content - Markdown content
 * @returns {Array} Array of heading objects
 */
export function extractHeadingsFromMarkdown(content) {
  const headings = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    let text = match[2].trim();
    let id = null;

    // Check for explicit [#slug] pattern
    const slugMatch = text.match(/\s*\[#([^\]]+)\]\s*$/);
    if (slugMatch) {
      id = slugMatch[1];
      // Remove [#slug] from display text
      text = text.replace(/\s*\[#[^\]]+\]\s*$/, '').trimEnd();
    } else {
      // Auto-generate ID from text
      id = generateHeadingId(text);
    }

    headings.push({
      depth,
      text,
      id
    });
  }

  return headings;
}
