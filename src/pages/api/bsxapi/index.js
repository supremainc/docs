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
            theme: 'alternate'
          }}
        />
    </Layout>
  )
}

export default App