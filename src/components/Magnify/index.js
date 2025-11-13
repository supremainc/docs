import Magnifier from "react-magnifier";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Magnify(props) {
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = 'https://supremainc.github.io/docs';
    const img = (() => {
        if (isDev) {
            return useBaseUrl(props.src);
        } else {
            return `${baseUrl}${props.src}`;
        }
    })();
    const updatedProps = {
        ...props,
        src: img
    };
    // console.log(img);
    return <Magnifier {...updatedProps} />;
}