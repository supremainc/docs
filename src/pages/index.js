import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const returnURL = useBaseUrl("/platform/biostar_x");
  return <Redirect to={returnURL} />;
}