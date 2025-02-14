import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';

export default function Image({src, alt, className, alone}) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const imagePath = 
        currentLocale === 'ko' || alone ? 
            useBaseUrl(src) : 
            useBaseUrl(src.replace('/img/', `/img/${currentLocale}/`));

    const errTarget = useBaseUrl('/img/default-placeholder-image.webp')

    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }

    return (
        <MDXContents>
            <p className='hasimg'>
                <img
                    loading="lazy"
                    src={imagePath}
                    alt={alt}
                    className={clsx('container', className)}
                    onError={onError}
                />
            </p>
        </MDXContents>
    );
}