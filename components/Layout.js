import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './Header'
//import Footer from './Footer'
import { useAppContext } from "../AppContext";

import styles from '../styles/components/Layout.module.css'

export default function Layout({title, keywords, description, children, router}) {

  const { state, dispatch } = useAppContext()

  return (
    <div className={`${styles.contents} ${state.darkMode ? styles.contentDark : ''}`}>
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