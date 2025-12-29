import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { LicenseForm } from '@site/src/components/bsx-license-calculator/feature';
import './styles.css'

function App() {
  return (
    <Layout>
      <Head>
        <title>BioStar X License Calculator | Suprema Docs</title>
        <meta name="description" content="Use the BioStar X License Calculator to get personalized license recommendations based on your site requirements, capacity, and feature needs." />
        <meta name="keywords" content="BioStar X license, license calculator, capacity upgrade, feature add-ons, access control license, license recommendation" />
      </Head>
      <div className='license-calculator'>
        <LicenseForm />
      </div>
    </Layout>
  );
}

export default App