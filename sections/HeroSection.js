import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'

import styles from '../styles/sections/HeroSection.module.css';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeroSection() {

  const text1 = "- Let's Work Together"
  const words1 = text1.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.32, delayChildren: 0.4 * i}
    }),
    // visible: {opacity: 1}
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      y:20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },

  };

  const [hoverSide, setHoverSide] = useState(undefined)

  const mouseEnterLeft = () => {
    setHoverSide('left')
  }

  const mouseOutLeft = () => {
    setHoverSide(undefined)
  }

  const mouseEnterRight = () => {
    setHoverSide('right')
  }

  const mouseOutRight = () => {
    setHoverSide(undefined)
  }

  return (
    <section className={`${styles.container} ${hoverSide === 'left' ? styles.hoverLeft : '' } ${hoverSide === 'right' ? styles.hoverRight : '' }`}>
      <div className={`${styles.split} ${styles.left}`} onMouseEnter={mouseEnterLeft} onMouseLeave={mouseOutLeft}>
        <div className={styles.leftSideTextContainer}>
          <h1 className={styles.heading1}>Jack <span style={{marginLeft: '10rem'}}>Shan</span></h1>
          <span className={styles.heading1Underline + " mt-2"}></span>
          <a className={styles.iconLink} href="https://www.linkedin.com/in/jack-shan/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className={styles.headingIcons + " mt-2 mr-2"}/></a>
          <a className={styles.iconLink} href="https://github.com/jshan431" target="_blank"><FontAwesomeIcon icon={faGithub}  className={styles.headingIcons + " mt-2"}/></a>
        </div>
        {/* <Link href="/about">
          <a className={styles.btn}>Learn More</a>
        </Link> */}
      </div>
      <div className={`${styles.split} ${styles.right}`} onMouseEnter={mouseEnterRight} onMouseLeave={mouseOutRight}>
        {/* <h1 className={styles.heading1}>Projects</h1>
        <Link href="/about">
          <a className={styles.btn}>Learn More</a>
        </Link> */}
        <motion.div 
          initial="hidden"
          animate="visible"
          // animate={testControls}
          variants={container}
          transition={{ delay: 1}}
          className={styles.rightSideTextContainer}
        >
          {/* <h4 className="mb-2">- Let's Work Together</h4> */}
          {words1.map((word, index) => (
            <motion.span variants={child} className={styles.textWords} key={index} lang="de">
              {word}
            </motion.span>
          ))}
          <h3 className="mb-2 mt-2">Hi, I'm Web Developer and Designer from San Francisco, California.</h3>
          <h4>
            I specialize in full stack web develop using modern web technologies, and also have an excellect understanding of good web design principles.
          </h4>
        </motion.div>
      </div>
    </section>
  )
}