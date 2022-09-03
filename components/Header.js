import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/components/Header.module.css'

import DarkModeSwitch from "../elements/DarkModeSwitch";

export default function Header() {

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


    // console.log(window.scrollY)
    // console.log(myRef.current.offsetHeight)
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${scrollPass ? styles.active : ''}`} ref={myRef}>
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
            <li><DarkModeSwitch /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}