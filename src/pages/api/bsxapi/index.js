import { ApiReferenceReact } from '@scalar/api-reference-react';
import BsxApi from './bsxapi.json';
import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import '@scalar/api-reference-react/style.css'
import './theme.css'

function App() {
  const [spec, setSpec] = useState({ ...BsxApi })

  return (
    <Layout>
        <ApiReferenceReact
          configuration={{
            content: spec,
            defaultHttpClient: {
                targetKey: 'shell',
                clientKey: 'curl',
            },
            hideModels: true,
            orderSchemaPropertiesBy: 'preserve',
            withDefaultFonts: false,
            showToolbar: 'never',
            layout: 'modern',
            theme: 'alternate',
            customCss: `
              .t-doc__sidebar {--scalar-color-green: #00a400;--scalar-color-red: #fa383e;--scalar-color-yellow: #ffba00;--scalar-color-blue: #3578e5;--scalar-color-orange: #ff8d4d;--scalar-color-purple: #b191f9;}
              .scalar-app .markdown ul, .scalar-app .markdown ol { padding-left: 1.6em;}
              .scalar-app .markdown:before { content: none; }
              .scalar-app .markdown ul ul li::before, .scalar-app .markdown ol > ul ul li::before { content: none}
              .scalar-app .markdown table { display: table, width: 100%;}
            `
          }}
        />
    </Layout>
  )
}

export default App