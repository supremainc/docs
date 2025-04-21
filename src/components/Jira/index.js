import Link from '@docusaurus/Link';

export default function Jira({num}) {
    let jiraLink;
    if (num.startsWith('SW5' || 'FISS')) {
        jiraLink = 'https://jira.suprema.co.kr/browse/' + num;
    } else {
        jiraLink = 'http://bss-jira.suprema.co.kr:8880/browse/' + num;
    }
    return (
        <Link to={jiraLink} target="_blank" className="jira-link">
            [{num}]
        </Link>
    )
}