import styles from './styles.module.css';
import clsx from 'clsx';

export function StatusOK() {
    return (
        <div className={clsx(styles.status, styles.ok)}></div>
    )
}

export function StatusFail() {
    return (
        <div className={clsx(styles.status, styles.fail)}></div>
    )
}