import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate'; 

export default function Image({src, alt, className, alone, caption, ico, width, height}) {
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

    // 서버 사이드 렌더링과 클라이언트 렌더링 일치를 위해
    // width/height 속성을 항상 포함하되, 값이 없으면 undefined로 설정
    const imageProps = {
        loading: "lazy",
        src: imagePath,
        alt: alt,
        onError: onError,
        // postBuild 플러그인에서 추가한 속성과 일치시키기 위해
        // props가 없어도 undefined로 설정하여 속성 자체는 렌더링
        width: width || undefined,
        height: height || undefined
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