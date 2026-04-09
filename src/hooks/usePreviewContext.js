import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function usePreviewContext() {
  const { siteConfig } = useDocusaurusContext();
  return siteConfig.customFields.context === 'preview';
}
