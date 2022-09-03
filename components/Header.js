import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
import { useAppContext } from "../AppContext";

export default function Header() {

  const myRef = useRef()

  const [scrollPass, setScrollPass] = useState(false);

  const { state, dispatch } = useAppContext()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {

    dispatch({type: 'toggle_darkMode'})

  }

  if (state.darkMode){
    console.log("Yes in dark mode")
  }

  const handleScroll = () => {
    const scrollPassPoint = 150
    if(window.scrollY > myRef.current.offsetHeight + scrollPassPoint){
      setScrollPass(true);
    } else {
      setScrollPass(false);
    }


    // console.log(window.scrollY)
    // console.log(myRef.current.offsetHeight)
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${scrollPass ? styles.active : ''} ${state.darkMode ? styles.dark : ''}`} ref={myRef}>
        <div className={styles.container}>
          <h1 className="logo"><a href="/index.html">My Website</a></h1>
          <ul>
            <li>

                <Link href={'/'} className="nav-link">
                  Home
                </Link>

            </li>
            <li>
              <Link href={'/about'} className="nav-link">
                About
              </Link>
            </li>
            <li><a href="#">Services</a></li>
            <li onClick={toggleDarkMode}>Dark Mode</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}