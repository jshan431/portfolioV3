import styles from '../styles/components/Footer.module.css'
import DarkModeSwitch from "../elements/DarkModeSwitch";

/* To get arrow icons to appear? */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <span className={styles.text}><a href="mailto:jshan431@gmail.com">jshan431@gmail.com</a></span>
    </footer>
  )
}
