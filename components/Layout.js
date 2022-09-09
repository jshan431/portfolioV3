import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './Header'
//import Footer from './Footer'
import { useAppContext } from "../AppContext";

import styles from '../styles/components/Layout.module.css'

export default function Layout({title, keywords, description, children}) {

  const { state, dispatch } = useAppContext()

  return (
    <div className={`${styles.contents} ${state.darkMode ? styles.contentDark : ''}`}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap" rel="stylesheet"></link> */}
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

