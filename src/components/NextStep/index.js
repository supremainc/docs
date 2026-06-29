import clsx from 'clsx';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

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
    return (
        <Link to={to} className={styles.nextStepContent} target={target}>
            {children}
        </Link>
    );
}