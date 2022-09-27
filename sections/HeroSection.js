import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from 'next/link'

import styles from '../styles/sections/HeroSection.module.css';

export default function HeroSection() {

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
        <h1 className={styles.heading1}>About Me</h1>
        <Link href="/about">
          <a className={styles.btn}>Learn More</a>
        </Link>
      </div>
      <div className={`${styles.split} ${styles.right}`} onMouseEnter={mouseEnterRight} onMouseLeave={mouseOutRight}>
        {/* <h1 className={styles.heading1}>Projects</h1>
        <Link href="/about">
          <a className={styles.btn}>Learn More</a>
        </Link> */}
        <div className={styles.rightSideTextContainer}>
          <h4 className="mb-2">- Let's Work Together</h4>
          <h3 className="mb-2">Hi, I'm Web Developer and Designer from San Francisco, California.</h3>
          <h4>
            I specialize in full stack web develop using modern web technologies, and also have an excellect understanding of good web design principles.
          </h4>
        </div>
      </div>
    </section>
  )
}