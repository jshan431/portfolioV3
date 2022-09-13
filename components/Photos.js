import { useState } from 'react'
import styles from '../styles/components/Photos.module.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Photos({selectedPanel}) {

  const bgArray = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  ]

  // const [activeIdx, setActiveIdx] = useState(1)
  const [activeIdx, setActiveIdx] = useState({idx: 0})

  const handleLeftClick = () => {
    // console.log("clicked")
    // console.log(activeIdx)
    // setActiveIdx(activeIdx--)
    // console.log(activeIdx)

    // correct way to mutate state or else rerender was not working upon first click
    // setActiveIdx({
    //   ...activeIdx,
    //   idx: activeIdx.idx - 1
    // })

    if(activeIdx.idx === 0){
      setActiveIdx({
        ...activeIdx,
        idx: activeIdx.idx + 4
      })
    } else {
      setActiveIdx({
        ...activeIdx,
        idx: activeIdx.idx - 1
      })
    }


    // if(activeIdx < 0){

    // }
  }

  const handleRightClick = () => {
    // console.log("clicked")
    // console.log(activeIdx)
    // setActiveIdx(activeIdx++)
    // console.log(activeIdx)

    // correct way to mutate state or else rerender was not working upon first click
    // setActiveIdx({
    //   ...activeIdx,
    //   idx: activeIdx.idx + 1
    // })
    if(activeIdx.idx === 4){
      setActiveIdx({
        ...activeIdx,
        idx: activeIdx.idx - 4
      })
    } else {
      setActiveIdx({
        ...activeIdx,
        idx: activeIdx.idx + 1
      })
    }
  }

  return (
    <div className={`${styles.photosContainer} ${selectedPanel === 'third' ? styles.photosContainerAnimate : ''}`} style={{ backgroundImage: `url(${bgArray[activeIdx.idx]})`}}>

      <div className={styles.slidesContainer}>
        <div
          className={`${styles.slide} ${activeIdx.idx === 0 ? styles.active : ''}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
          }}
        ></div>
        <div
          className={`${styles.slide} ${activeIdx.idx === 1 ? styles.active : ''}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')"
          }}
        ></div>
        <div
          className={`${styles.slide} ${activeIdx.idx === 2 ? styles.active : ''}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
          }}
        ></div>
        <div
          className={`${styles.slide} ${activeIdx.idx === 3 ? styles.active : ''}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')"
          }}
        ></div>
        <div
          className={`${styles.slide} ${activeIdx.idx === 4 ? styles.active : ''}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"
          }}
        ></div>

      </div>
      <button className={`${styles.arrow} ${styles.leftArrow}`} id="left" onClick={handleLeftClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <button className={`${styles.arrow} ${styles.rightArrow}`} id="right" onClick={handleRightClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </div>
  )
}
