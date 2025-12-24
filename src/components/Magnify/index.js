import Magnifier from "react-magnifier";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Magnify(props) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = 'https://supremadocs.blob.core.windows.net';
    const img = (() => {
        const localizedSrc = currentLocale === 'ko' ? 
            props.src : 
            props.src.replace('/img/', `/img/en/`);
        
        if (isDev) {
            return useBaseUrl(localizedSrc);
        } else {
            return `${baseUrl}${localizedSrc}`;
        }
    })();
    const updatedProps = {
        ...props,
        src: img
    };
    // console.log(img);
    return <Magnifier {...updatedProps} />;
}