import useBrokenLinks from '@docusaurus/useBrokenLinks';
export default function Anchor ({id}) {
    useBrokenLinks().collectAnchor(id);
    return (
        <a id={id} className="anchor" href={`#${id}`}>
            &#8203;
        </a>
    );
}