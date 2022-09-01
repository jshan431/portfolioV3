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
            <li><a href="#" class="current">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

    <div class="hero" style={{height: '200vh'}}>
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
      </div>
    </div>

    <section class="container content">
      <h2>Content One</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</p>

      <h3>Content Two</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
    </section>

    </header>
  )
}