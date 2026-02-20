import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Linkto({ to, children }) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    let docsLink;

    if (currentLocale !== 'ko') {
        docsLink = `https://docs.supremainc.com/${currentLocale}/`;
    } else if (currentLocale === 'ru') {
        docsLink = `https://docs.supremainc.com/en/`;
    } else {
        docsLink = 'https://docs.supremainc.com/';
    }
    return (
        <a href={docsLink + to} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}