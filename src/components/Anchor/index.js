export default function Anchor ({id}) {
    return (
        <a id={id} className="anchor" href={`#${id}`}>
            &#8203;
        </a>
    );
}