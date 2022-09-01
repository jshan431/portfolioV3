import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'

export default function Header() {

  const myRef = useRef()

  const [scrollPass, setScrollPass] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 50);
  //     console.log(window.scrollY)
  //   });

  //   return () => {
  //     window.removeEventListener('scroll', () => {
  //       setScroll(window.scrollY > 50);
  //       console.log(window.scrollY)
  //     });
  //   };
  // }, []);

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
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}