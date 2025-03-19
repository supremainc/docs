import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';

export default function Image({src, alt, className, alone, caption}) {
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
            {caption ? 
                <figure>
                    <img
                        loading="lazy"
                        src={imagePath}
                        alt={alt}
                        className={clsx('img', className)}
                        onError={onError}
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
                    />
                </p>
                }
        </MDXContents>
    );
}