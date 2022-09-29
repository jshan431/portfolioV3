import { useMediaQuery } from 'react-responsive'
import styles from '../styles/pages/Home.module.css'
import HeroSection from '../sections/HeroSection'
import AboutMe from '../sections/AboutMe'


import FeaturedProjects from '../sections/FeaturedProjects'
import FeaturedProjectsMobile from '../sections/FeaturedProjectsMobile'

export default function Home() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (

    <div className={styles.main}>
      <HeroSection />
      <AboutMe />
      {isDesktopOrLaptop ? <FeaturedProjects /> : <FeaturedProjectsMobile />}
    </div>
  )
}
