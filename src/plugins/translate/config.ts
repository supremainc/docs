import { program } from 'commander';
import { config } from 'dotenv';

// .env 파일 로드
config();

program
  .option(
    '--apiKey [key]',
    'OpenAI Key for translation',
    process.env.OPENAI_API_KEY
  )
  .option(
    '--organization [key]',
    'OpenAI organization ID',
    process.env.OPENAI_ORGANIZATION
  )
  .option(
    '--baseUrl [url]',
    'OpenAI base url which can be change for other use'
  )
  .option(
    '--model [model]',
    'OpenAI Model which use for translation',
    'gpt-4o-mini'
  )  .option(
    '--project [path]',
    'Root path which put docusaurus.config.js',
    process.cwd()
  )
  .option(
    '--file [pattern]',
    'Specific file pattern to translate (glob pattern, relative to docs/)',
    ''
  )
  .parse();

export const options = program.opts<{
  apiKey?: string;
  organization?: string;
  baseUrl?: string;
  model: string;
  project: string;
  file: string;
}>();

export const whitelist = [
  'Discord',
  'Github',
  'API',
  'Twitter',
  'copyright',
  'Kubernetes',
  'Stack Overflow',
];