import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';

export default function Image({src, alt, className, alone, caption, ico, width, height, usemap}) {
    const { i18n: {currentLocale}, siteConfig } = useDocusaurusContext();
    const isPreview = siteConfig.customFields.context === 'preview';
    const isDev = process.env.NODE_ENV === 'development';
    
    // Generate image path based on environment
    const baseUrl = 'https://supremadocs.blob.core.windows.net';
    const imagePath = (() => {
        const localizedSrc = currentLocale === 'ko' || alone ? 
            src : 
            src.replace('/img/', `/img/en/`);
        
        if (isDev || isPreview) {
            return useBaseUrl(localizedSrc);
        } else {
            return `${baseUrl}${localizedSrc}`;
        }
    })();

    const errTarget = useBaseUrl('/img/default-placeholder-image.webp')

    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }

    // width/height는 remark-image-size 플러그인이 빌드 타임에 이미 주입해준다
    // (직접 넘긴 경우는 그 값 우선). 하나만 전달된 경우 다른 하나는 auto로 설정.
    const imageProps = {
        loading: "lazy",
        decoding: "async",
        src: imagePath,
        alt: alt,
        onError: onError,
        width: width || 'auto',
        height: height || 'auto',
        usemap: usemap
    };

    if (ico) {
        return (
            <img
                {...imageProps}
                className={clsx('ico', className)}
            />
        );
    } else {
        return (
            <MDXContents>
                {caption ? 
                    <figure>
                        <img
                            {...imageProps}
                            className={clsx('img', className)}
                        />
                        <figcaption>
                            {caption === null ? 
                                translate({
                                    id: 'theme.figureCaption.desc',
                                    message: '위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다.'
                                }) : caption
                            }
                        </figcaption>
                    </figure>
                    :<p className='hasimg'>
                        <img
                            {...imageProps}
                            className={className}
                        />
                    </p>
                    }
            </MDXContents>
        );
    }
}