import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Redoc from '@theme/Redoc';

function App() {
  return (
    <Layout>
      <Head>
        <title>BioStar X API Reference | Suprema Docs</title>
        <meta name="description" content="BioStar X REST API documentation. Manage users, access control, doors, devices, and credentials with JSON-based endpoints." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://docs.supremainc.com/api/bsxapi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="BioStar X API Reference | Suprema Docs" />
        <meta property="og:description" content="Complete REST API documentation for BioStar X access control system. Manage users, doors, devices, and biometric credentials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.supremainc.com/api/bsxapi" />
        <meta property="og:site_name" content="Suprema Docs" />
        
        {/* Keywords */}
        <meta name="keywords" content="BioStar X API, Suprema API, access control API, biometric API, REST API, user management API, door control API, device management API" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "BioStar X API Reference",
            "description": "Complete REST API documentation for BioStar X access control system",
            "author": {
              "@type": "Organization",
              "name": "Suprema Inc.",
              "url": "https://www.supremainc.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Suprema Inc.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://supremainc.com/en/asset/images/common/sns_img02.jpg"
              }
            },
            "datePublished": "2025-11-11",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://docs.supremainc.com/api/bsxapi"
            }
          })}
        </script>
      </Head>
      <Redoc 
        id="bsxapi" 
        option={{
          disableSearch: false,
          scrollYOffset: 40,
        }}
      />
    </Layout>
  )
}

export default App