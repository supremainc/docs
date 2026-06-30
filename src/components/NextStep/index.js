import clsx from 'clsx';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {usePreviewContext} from '../../hooks';

export function NextStep({ notitle, children, className }) {
    return (
        <div className={clsx(styles.nextStep, className)}>
            <div className={styles.nextStepTitle}>
                {notitle ? null :
                    <h4>
                        {translate({
                            id: 'theme.docs.nextStep',
                            message: '다음 단계'
                        })}
                    </h4>
                }
            </div>
            {children}
        </div>
    );
}

export function NextItem({ children, to, target }) {
    const isPreview = usePreviewContext();
    const location = useLocation();
    const { siteConfig: { baseUrl } } = useDocusaurusContext();

    let resolvedTo = to;
    if (isPreview && /^\.\.?\//.test(to)) {
        // In preview, pages have no trailing slash so the browser resolves relative links
        // from the wrong base when opening a new tab. Convert to an absolute path instead.
        const currentDir = location.pathname.replace(/\/?$/, '/');
        const absolutePath = new URL(to, `http://x${currentDir}`).pathname;
        resolvedTo = absolutePath.startsWith(baseUrl)
            ? absolutePath.slice(baseUrl.length - 1)
            : absolutePath;
    }

    return (
        <Link to={resolvedTo} className={styles.nextStepContent} target={target}>
            {children}
        </Link>
    );
}