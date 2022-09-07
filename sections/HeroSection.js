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
        <h1 className={styles.heading1}>Projects</h1>
        <Link href="/about">
          <a className={styles.btn}>Learn More</a>
        </Link>
      </div>
    </section>
  )
}