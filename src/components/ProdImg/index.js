import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import imageSize from '../Image/sizeOfimages.json';

export default function ProdImg({src, alt, className, alone, width, height}) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const isDev = process.env.NODE_ENV === 'development';
    
    // Generate image path based on environment
    const baseUrl = 'https://supremadocs.blob.core.windows.net';
    const imagePath = (() => {
        const localizedSrc = currentLocale === 'ko' || alone ? 
            src : 
            src.replace('/img/', `/img/${currentLocale}/`);
        
        if (isDev) {
            return useBaseUrl(localizedSrc);
        } else {
            return `${baseUrl}${localizedSrc}`;
        }
    })();

    const errTarget = useBaseUrl('/img/default-placeholder-image.webp')
    // console.log('Image path:', imagePath, imageSize[imagePath]);
    

    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }
    const imageProps = {
        loading: "lazy",
        decoding: "async",
        src: imagePath,
        alt: alt,
        onError: onError,
        ...(width || height ? {
            width: width || 'auto',
            height: height || 'auto'
        } : {
            width: imageSize[imagePath.replace(baseUrl, '')]?.width || 'auto',
            height: imageSize[imagePath.replace(baseUrl, '')]?.height || 'auto'
        }),
    };

    return (
        <MDXContents>
            <p className='hasimg'>
                <img
                    {...imageProps}
                    className={className}
                />
            </p>
        </MDXContents>
    );
}