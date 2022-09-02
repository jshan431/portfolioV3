import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './Header'
//import Footer from './Footer'

import styles from '../styles/components/Layout.module.scss'

export default function Layout({title, keywords, description, children, router}) {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div className={styles.contents + " overflow-hidden"}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className={styles.container}
      >
        {children}
      </motion.main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Jack Shan',
  description: 'Web Developer ',
  keywords: 'freelancer'
}