import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/components/Header.module.css'
import DarkModeSwitch from "../elements/DarkModeSwitch";

/* To get arrow icons to appear? */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {

  const {asPath} = useRouter()

  const myRef = useRef()

  const [scrollPass, setScrollPass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPassPoint = 150
    if(window.scrollY > myRef.current.offsetHeight + scrollPassPoint){
      setScrollPass(true);
    } else {
      setScrollPass(false);
    }

  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${scrollPass ? styles.active : ''}`} ref={myRef}>
        <div className={styles.container}>
          <h1 className="logo">
            <Link href={'/'}>
              <a className={styles.navLogoLink}>
                Jack Shan
              </a>
            </Link>
          </h1>
          <ul>
            <li className={styles.navHome}>
              <Link href={'/'} className={styles.navLogoLink}>
                <a className={`${styles.navLink} ${asPath === '/' ? styles.navLinkCurrent : ''}`}>
                  Home
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href={'/about'} className={styles.navLogoLink}>
                <a className={`${styles.navLink} ${asPath === '/about' ? styles.navLinkCurrent : ''}`}>
                  About
                </a>
              </Link>
            </li> */}
            <li>              
              <Link href={'/projects'} className={styles.navLogoLink}>
                <a className={`${styles.navLink} ${asPath === '/projects' ? styles.navLinkCurrent : ''}`}>
                  Projects
                </a>
              </Link></li>
            <li><DarkModeSwitch /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


// className={`${styles.slider} ${state.darkMode ? styles.sliderDark : ''}`}