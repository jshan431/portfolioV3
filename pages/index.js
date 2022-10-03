import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'
import styles from '../styles/pages/Home.module.css'
import HeroSection from '../sections/HeroSection'
import AboutMe from '../sections/AboutMe'


import FeaturedProjects from '../sections/FeaturedProjects'
import FeaturedProjectsMobile from '../sections/FeaturedProjectsMobile'

export default function Home() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const [dimensions, setDimensions] = useState({ 
    // height: undefined,
    // width: undefined
  })

  useEffect(() => {

    if(!dimensions.width){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })  

  return (

    <div className={styles.main}>
      <HeroSection />
      <AboutMe />
      <div>
        {/* {isDesktopOrLaptop ? <FeaturedProjects /> :  <FeaturedProjectsMobile />} */}
        {/* {dimensions.width ? <FeaturedProjects /> : <div>Hello</div>} */}
        {dimensions.width && isDesktopOrLaptop ? <FeaturedProjects /> :  <FeaturedProjectsMobile />}
      </div>


    </div>
  )
}
