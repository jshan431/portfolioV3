import { motion } from "framer-motion";

import styles from '../styles/components/AboutMe.module.css'

export default function AboutMe({selectedPanel}) {

  const text1 = "Jack from San Francisco."
  const words1 = text1.split(" ")

  const text2 = "Web Developer / Web Designer."
  const words2 = text2.split(" ")

  const text3 = "SFSU Graduate."
  const words3 = text3.split(" ")

  const text4 = "B.S, Computer Science."
  const words4 = text4.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.12, delayChildren: 0.04 * i}
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


  return (
    <div className={`${styles.aboutMeContainer} ${selectedPanel === 'first' ? styles.aboutMeContainerAnimate: ''}`}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={container}
        transition={{ delay: .5}}
        className={styles.wordsContainer}
      >
        {words1.map((word, index) => (
          <motion.span variants={child} className={styles.textWords} key={index} lang="de">
            {word}
          </motion.span>
        ))}
        <br/>
        <br/>
        {words2.map((word, index) => (
          <motion.span variants={child} className={styles.textWords} key={index} lang="de">
            {word}
          </motion.span>
        ))}
        <br/>
        <br/>
        {words3.map((word, index) => (
          <motion.span variants={child} className={styles.textWords} key={index} lang="de">
            {word}
          </motion.span>
        ))}
        <br/>
        <br/>
        {words4.map((word, index) => (
          <motion.span variants={child} className={styles.textWords}  key={index} lang="de">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>

  )
}

/**
 * Resources
 * https://www.youtube.com/watch?v=wgXLE_GZ9sM
 * 
 */