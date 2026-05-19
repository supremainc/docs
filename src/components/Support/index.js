import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Support() {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    if (currentLocale === 'ko') {
        return (
            <span>슈프리마 기술 지원팀(<Link to='mailto:CS@suprema.co.kr'>CS@suprema.co.kr</Link>)</span>
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