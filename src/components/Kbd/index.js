import styles from './styles.module.css';

export default function Kbd({children}) {
  return <span className={styles.kbd}>{children}</span>;
}