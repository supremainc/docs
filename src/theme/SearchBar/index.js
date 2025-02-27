import { DocSearch } from '@docsearch/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import '@docsearch/css';

function App() {
  const {siteConfig} = useDocusaurusContext();
  const appId = siteConfig.themeConfig.algolia.appId;
  const apiKey = siteConfig.themeConfig.algolia.apiKey;
  const indexName = siteConfig.themeConfig.algolia.indexName;
  return (
    <DocSearch
      appId={appId}
      indexName={indexName}
      apiKey={apiKey}
    />
  );
}

export default App;