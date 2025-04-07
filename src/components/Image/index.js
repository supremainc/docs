import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import useImageDimensions from './useImageDimensions'; 

export default function Image({src, alt, className, alone, caption, ico}) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const imagePath = 
        currentLocale === 'ko' || alone ? 
            useBaseUrl(src) : 
            useBaseUrl(src.replace('/img/', `/img/${currentLocale}/`));

    const errTarget = useBaseUrl('/img/default-placeholder-image.webp')

    const dimensions = useImageDimensions(imagePath);
    // Handle image loading errors
    function onError(e) {
        e.target.src = errTarget;
    }

    if (ico) {
        return (
            <img
                loading="lazy"
                src={imagePath}
                alt={alt}
                className={clsx('ico', className)}
                onError={onError}
                width={dimensions.width || undefined}
                height={dimensions.height || undefined}
            />
        );
    } else {
        return (
            <MDXContents>
                {caption ? 
                    <figure>
                        <img
                            loading="lazy"
                            src={imagePath}
                            alt={alt}
                            className={clsx('img', className)}
                            onError={onError}
                            width={dimensions.width || undefined}
                            height={dimensions.height || undefined}
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
                            loading="lazy"
                            src={imagePath}
                            alt={alt}
                            className={className}
                            onError={onError}
                            width={dimensions.width || undefined}
                            height={dimensions.height || undefined}
                        />
                    </p>
                    }
            </MDXContents>
        );
    }

}