import type { ReactNode } from 'react';
import styles from './styles.module.css';

export function Steps({ children }: { children: ReactNode }) {
  return <div className={styles.fdsteps}>{children}</div>;
}

export function Step({ children }: { children: ReactNode }) {
  return <div className={styles.fdstep}>{children}</div>;
}