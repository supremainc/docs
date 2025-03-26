import styles from './styles.module.css';

export default function Kbd({children}) {
  return <kbd className={styles.kbd}>{children}</kbd>;
}