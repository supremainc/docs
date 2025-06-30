import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const returnURL = currentLocale === "ko" ? "/help/platform/biostar_x" : `/help/${currentLocale}/platform/biostar_x`;
  return <Redirect to={returnURL} />;
}