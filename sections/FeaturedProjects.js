import { useState, useRef, useEffect } from 'react'
import styles from '../styles/sections/FeaturedProjects.module.css'

import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FeaturedProjects({}) {

  const numSlides = 4

  const myRef = useRef()

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const [containerHeight, setContainerHeight] = useState(undefined)

  const [leftSlideTop, setLeftSlideTop] = useState(undefined)

  const [leftSlideTranslate, setLeftSlideTranslate] = useState(undefined)

  const [rightSlideTranslate, setRightSlideTranslate] = useState(undefined)

  const upButtonClick = () => {
    setActiveSlideIndex(activeSlideIndex + 1)
  }

  const downButtonClick = () => {
    setActiveSlideIndex(activeSlideIndex - 1)
  }

  useEffect(() => {

    setContainerHeight(myRef.current.clientHeight)
    setLeftSlideTop(-1 * (containerHeight * (numSlides -1)))

    setLeftSlideTranslate((activeSlideIndex * containerHeight))
    setRightSlideTranslate(-1 * (activeSlideIndex * containerHeight))

    if(activeSlideIndex > numSlides - 1) {
      setActiveSlideIndex(0)
    }

    if(activeSlideIndex < 0) {
      setActiveSlideIndex(numSlides - 1)
    }

  }, )

  return (
    <div className={styles.sliderContainer} ref={myRef}>
      <div className={styles.leftSlide} style={{top: `${leftSlideTop}px`, transform: `translateY(${leftSlideTranslate}px)`}}>
        <div className={styles.singleSlide} style={{backgroundColor: '#FD3555'}}>
          <h1><a href='https://womenwritenow.com/' target='_blank'>Women Write Now</a></h1>
          <p>Featured Project 4/4</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#2A86BA'}}>
          <h1><a href='https://www.blumhouse.com/' target='_blank'>Blumhouse</a></h1>
          <p>Featured Project 3/4</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#252E33'}}>
          <h1><a href='https://bkinddolls.com/' target='_blank'>Be Kind Dolls</a></h1>
          <p>Featured Project 2/4</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#FFB866'}}>
          <h1><a href='https://www.openroadfilms.com/' target='_blank'>Open Road Films</a></h1>
          <p>Featured Project 1/4</p>
        </div>
      </div>
      <div className={styles.rightSlide} style={{transform: `translateY(${rightSlideTranslate}px)`}}>
        <div style={{backgroundImage: "url('/images/projects/openroadfilms.png')"}}></div>
        <div style={{backgroundImage: "url('/images/projects/bkinddolls.png')"}}></div>
        <div style={{backgroundImage: "url('/images/projects/blumhouse.png')"}}></div>
        <div style={{backgroundImage: "url('/images/projects/lolwwn.png')"}}></div>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.downButton + ' ' + styles.actionButton} onClick={downButtonClick}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button className={styles.upButton + ' ' + styles.actionButton} onClick={upButtonClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>

  )
}
