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
      <div className={styles.leftSlide} style={{left: `${leftSlideLeft}px`, transform: `translateX(${leftSlideTranslate}px)`}}>
        <div className={styles.singleSlide} style={{backgroundColor: '#FD3555'}}>
          <h1>Nature flower</h1>
          <p>all in pink</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#2A86BA'}}>
          <h1>Bluuue Sky</h1>
          <p>with it's mountains</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#252E33'}}>
          <h1>Lonely castle</h1>
          <p>in the wilderness</p>
        </div>
        <div className={styles.singleSlide} style={{backgroundColor: '#FFB866'}}>
          <h1>Flying eagle</h1>
          <p>in the sunset</p>
        </div>
      </div>
      <div className={styles.rightSlide} style={{transform: `translateX(${rightSlideTranslate}px)`}}>
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"}}></div>
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')"}}></div>
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')"}}></div>
        <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')"}}></div>
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