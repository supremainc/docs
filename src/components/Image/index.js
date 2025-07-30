import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { useEffect, useState, useRef } from 'react';

export default function Image({src, alt, className, alone, caption, ico, width, height}) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const [imgDimensions, setImgDimensions] = useState({ width: width, height: height });
    const imgRef = useRef(null);
    
    const imagePath = 
        currentLocale === 'ko' || alone ? 
            useBaseUrl(src) : 
            useBaseUrl(src.replace('/img/', `/img/${currentLocale}/`));

    const errTarget = useBaseUrl('/img/default-placeholder-image.webp')

    // 클라이언트 사이드에서 이미지 로드 후 크기 설정
    useEffect(() => {
        if (!width && !height) {
            const img = imgRef.current;
            if (img && img.complete && img.naturalWidth > 0) {
                // 이미지가 이미 로드된 경우
                setImgDimensions({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                });
            }
        }
    }, [width, height, imagePath]);

    // Handle image loading and set dimensions
    function onLoad(e) {
        if (!width && !height) {
            setImgDimensions({
                width: e.target.naturalWidth,
                height: e.target.naturalHeight
            });
        }
    }

    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }

    // 서버 사이드 렌더링과 클라이언트 렌더링 일치를 위해
    // width/height 속성이 있을 때만 포함하고, 없으면 속성 자체를 제거
    const imageProps = {
        loading: "lazy",
        decoding: "async",
        src: imagePath,
        alt: alt,
        ref: imgRef,
        onLoad: onLoad,
        onError: onError,
        // width, height가 실제 값이 있을 때만 속성 추가
        ...(imgDimensions.width && { width: imgDimensions.width }),
        ...(imgDimensions.height && { height: imgDimensions.height })
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