
import styles from '../styles/pages/Home.module.css'
import HeroSection from '../sections/HeroSection'
export default function Home() {
  return (

    <div className={styles.main}>
      <HeroSection />
      <HeroSection />
    </div>



  )
}
