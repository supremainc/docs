import remarkAdmonitions from 'remark-admonitions';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

console.log('remarkAdmonitions:', typeof remarkAdmonitions);
console.log('remarkAdmonitions.default:', typeof remarkAdmonitions.default);

const processor = unified()
  .use(remarkParse)
  .use(remarkAdmonitions.default || remarkAdmonitions);

const result = processor.parse(':::info\ntest\n:::');
console.log('Parsed successfully');
