import styles from './styles.module.css'

export default function Calloutlists({ children }) {
    return (
        <div className={styles.calloutLists}>
            {children}
        </div>
    )
}