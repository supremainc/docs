import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import imageSize from './sizeOfimages.json';

export default function Image({src, alt, className, alone, caption, ico, width, height, usemap}) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    
    const imagePath = 
        currentLocale === 'ko' || alone ? 
            useBaseUrl(src) : 
            useBaseUrl(src.replace('/img/', `/img/${currentLocale}/`));

    const errTarget = useBaseUrl('/img/default-placeholder-image.webp')
    // console.log('Image path:', imagePath, imageSize[imagePath]);
    

    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }

    // 서버 사이드 렌더링과 클라이언트 렌더링 일치를 위해
    // width/height 속성이 있을 때만 포함하고, 없으면 속성 자체를 제거
    const imageProps = {
        loading: "lazy",
        decoding: "async",
        decoding: "async",
        src: imagePath,
        alt: alt,
        onError: onError,
        // props로 width 또는 height가 전달되었을 때, 
        // 하나만 전달된 경우 다른 하나는 auto로 설정
        ...(width || height ? {
            width: width || 'auto',
            height: height || 'auto'
        } : {
            width: imageSize[imagePath]?.width || 'auto',
            height: imageSize[imagePath]?.height || 'auto'
        }),
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
                            {translate({
                                id: 'theme.figureCaption.desc',
                                message: '위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다.'
                            })}
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