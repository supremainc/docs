import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';

export default function ProdImg({src, alt, className, alone, width, height}) {
    const { i18n: {currentLocale}, siteConfig } = useDocusaurusContext();
    const isPreview = siteConfig.customFields.context === 'preview';
    const isDev = process.env.NODE_ENV === 'development';
    
    // Generate image path based on environment
    const baseUrl = 'https://supremadocs.blob.core.windows.net';
    const imagePath = (() => {
        const localizedSrc = currentLocale === 'ko' || alone ?
            src :
            src.replace('/img/', `/img/${currentLocale}/`);

        if (isPreview) {
            // preview 빌드는 로케일마다 baseUrl이 /docs/<locale>/로 스코프되어
            // useBaseUrl을 그대로 쓰면 static/img 전체가 로케일 수만큼 빌드 결과물에
            // 복제된다. 로케일 세그먼트를 제거한 공용 루트 경로로 고정해 중복을 막는다.
            const rootBaseUrl = currentLocale === 'ko'
                ? siteConfig.baseUrl
                : siteConfig.baseUrl.replace(new RegExp(`${currentLocale}/$`), '');
            return rootBaseUrl.replace(/\/$/, '') + localizedSrc;
        } else if (isDev) {
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