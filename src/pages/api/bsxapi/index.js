import { ApiReferenceReact } from '@scalar/api-reference-react';
import BsxApi from './bsxapi.json';
import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '@scalar/api-reference-react/style.css'
import './theme.css'

function App() {
  const [spec, setSpec] = useState({ ...BsxApi })

  return (
    <Layout>
      <Head>
        <title>BioStar X API | Suprema Docs</title>
        <meta name="description" content="Suprema BioStar X API is a JSON-based API for managing users, access groups, doors, devices, and more. Comprehensive API documentation with examples for access control and biometric authentication systems." />
        <meta property="og:title" content="BioStar X API - Suprema Docs" />
        <meta property="og:description" content="Suprema BioStar X API documentation - JSON-based API for access control, user management, device control, and biometric authentication." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="BioStar X API, Suprema API, Access Control API, Biometric API, JSON API, REST API, User Management API, Device Control API" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BioStar X API - Suprema Docs" />
        <meta name="twitter:description" content="Suprema BioStar X API documentation - JSON-based API for access control and biometric authentication." />
      </Head>
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