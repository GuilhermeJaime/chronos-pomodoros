import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica Pomodoros</a>
      <a href=''>Chronos-Pomodores &copy;{new Date().getFullYear()} </a>

      <a href=''> Feito por Guilherme Jaime</a>
    </footer>
  );}