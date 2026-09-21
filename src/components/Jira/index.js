import Link from '@docusaurus/Link';

export default function Jira({num, bss}) {
    let jiraLink;
    if (num) {
        jiraLink = 'https://supremainc.atlassian.net/browse/' + num;
        return (
            <Link to={jiraLink} target="_blank" className="jira-link">
            [{num}]
            </Link>
        )
    } else {
        jiraLink = 'http://bss-jira.suprema.co.kr:8880/browse/' + bss;
        return (
            <Link to={jiraLink} target="_blank" className="jira-link">
                [{bss}]
            </Link>
        )
    }
}