import Magnifier from "react-magnifier";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Magnify(props) {
    const img = useBaseUrl(props.src);
    const updatedProps = {
        ...props,
        src: img
    };
    // console.log(img);
    return <Magnifier {...updatedProps} />;
}