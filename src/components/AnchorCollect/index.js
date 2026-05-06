import useBrokenLinks from '@docusaurus/useBrokenLinks';

export default function AnchorCollect({ anchor }) {
  const brokenLinks = useBrokenLinks();
  brokenLinks.collectAnchor(anchor);
  return null;
}