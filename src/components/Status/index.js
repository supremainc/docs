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

export function StatusNormal() {
    return (
        <div className={clsx(styles.status, styles.normal)}></div>
    )
}

export function StatusUpdating() {
    return (
        <div className={clsx(styles.status, styles.updating)}></div>
    )
}

export function Mastermark() {
    return (
        <span className={clsx(styles.master, styles.mark)}>M</span>
    )
}

export function Slavemark() {
    return (
        <span className={clsx(styles.slave, styles.mark)}>S</span>
    )
}