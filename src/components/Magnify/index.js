import Magnifier from "react-magnifier";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Magnify(props) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const img = (() => {
        const localizedSrc = currentLocale === 'ko' || props.alone ? 
            props.src : 
            props.src.replace('/img/', `/img/en/`);
        
            return useBaseUrl(localizedSrc);
    })();
    const updatedProps = {
        ...props,
        src: img
    };
    // console.log(img);
    return <Magnifier {...updatedProps} />;
}