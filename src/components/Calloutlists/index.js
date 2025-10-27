import styles from './styles.module.css'

export default function Calloutlists({ children, className }) {
    return (
        <div className={`${styles.calloutLists} ${className}`}>
            {children}
        </div>
    )
}