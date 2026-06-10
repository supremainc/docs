import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Support() {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    if (currentLocale === 'ko') {
        return (
            <Link to='https://www.supremainc.com/ko/support/customer-center-reception.asp'>슈프리마 기술 지원팀</Link>
        )
    } else if (currentLocale === 'en') {
        return (
            <Link to='https://support.supremainc.com' target='_blank'>Suprema Global Technical Support Team</Link>
        )
    } else if (currentLocale === 'ja') {
        return (
            <Link to='https://support.supremainc.com' target='_blank'>Suprema グローバル技術サポートチーム</Link>
        )
    } else if (currentLocale === 'es') {
        return (
            <Link to='https://support.supremainc.com' target='_blank'>Equipo de Soporte Técnico global de Suprema</Link>
        )
    }
}