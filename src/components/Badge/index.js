import clsx from 'clsx';

export default function Badge({ children, className }) {
    return (
        <span className={clsx(`badge ${only ? 'only' : ''}`, className)}>{children}</span>
    )
}