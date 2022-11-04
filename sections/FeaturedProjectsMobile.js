import { useState, useRef, useEffect } from 'react'
import styles from '../styles/sections/FeaturedProjectsMobile.module.css'

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FeaturedProjectsMobile({}) {

  const numSlides = 4

  const myRef = useRef()

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const [containerWidth, setContainerWidth] = useState(undefined)

  const [leftSlideLeft, setLeftSlideLeft] = useState(undefined)

  const [leftSlideTranslate, setLeftSlideTranslate] = useState(undefined)

  const [rightSlideTranslate, setRightSlideTranslate] = useState(undefined)

  const rightButtonClick = () => {
    setActiveSlideIndex(activeSlideIndex + 1)
  }

  const leftButtonClick = () => {
    setActiveSlideIndex(activeSlideIndex - 1)
  }

  useEffect(() => {

    setContainerWidth(myRef.current.clientWidth)
    setLeftSlideLeft(-1 * (containerWidth * (numSlides -1)))

    setLeftSlideTranslate((activeSlideIndex * containerWidth))
    setRightSlideTranslate(-1 * (activeSlideIndex * containerWidth))

    if(activeSlideIndex > numSlides - 1) {
      setActiveSlideIndex(0)
    }

    if(activeSlideIndex < 0) {
      setActiveSlideIndex(numSlides - 1)
    }

  }, )

  return (
    <div className={styles.sliderContainer} ref={myRef}>
      <div className={styles.topSlide} style={{left: `${leftSlideLeft}px`, transform: `translateX(${leftSlideTranslate}px)`}}>
        <div className={styles.singleSlide} style={{backgroundColor: '#FD3555'}}>
          <h1><a href='https://womenwritenow.com/' target='_blank'>Women Write Now</a></h1>
          <p>Featured Project 4/4</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#2A86BA'}}>
          <h1><a href='https://www.blumhouse.com/' target='_blank'>Blumhouse</a></h1>
          <p>Featured Project 3/5</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#252E33'}}>
          <h1><a href='https://bkinddolls.com/' target='_blank'>Be Kind Dolls</a></h1>
          <p>Featured Project 2/5</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#FFB866'}}>
          <h1><a href='https://www.openroadfilms.com/' target='_blank'>Open Road Films</a></h1>
          <p>Featured Project 1/5</p>
        </div>
      </div>
      <div className={styles.rightSlide} style={{transform: `translateX(${rightSlideTranslate}px)`}}>
        <div style={{backgroundImage: "url('/images/projects/openroadfilms.png')"}}></div>
        <div style={{backgroundImage: "url('/images/projects/bkinddolls.png')"}}></div>
        <div style={{backgroundImage: "url('/images/projects/blumhouse.png')"}}></div>
        <div style={{backgroundImage: "url('/images/projects/lolwwn.png')"}}></div>
      </div>
      
      <div className={styles.actionButtons}>
        <button className={styles.rightButton + ' ' + styles.actionButton} onClick={rightButtonClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button className={styles.leftButton + ' ' + styles.actionButton} onClick={leftButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </div>

  )
}