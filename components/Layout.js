import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import { useAppContext } from "../AppContext";

import styles from '../styles/components/Layout.module.css'

export default function Layout({title, keywords, description, children, ogTitle, ogType, ogUrl, ogImage}) {

  const { state, dispatch } = useAppContext()

  return (
    <div className={`${styles.contents} ${state.darkMode ? styles.contentDark : ''}`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage}/>
        {/* <meta property="og:image" content={ogImage} /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap" rel="stylesheet"></link> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </Head>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Jack Shan Web Developer',
  description: 'A Web Developer based in San Francisco',
  keywords: 'Jack Shan, Freelancer, Programmer, Coder, Software Engineer, Web Developer',
  ogTitle: 'Jack Shan Web Developer',
  ogType: 'website',
  ogUrl: 'https://www.jackshan.com',
  ogImage: 'https://www.jackshan.com/images/jshan1.jpg'
}

