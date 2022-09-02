import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './Header'
//import Footer from './Footer'

import styles from '../styles/components/Layout.module.scss'

export default function Layout({title, keywords, description, children, router}) {



  return (
    <div className={styles.contents + " overflow-hidden"}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
        {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Jack Shan',
  description: 'Web Developer ',
  keywords: 'freelancer'
}