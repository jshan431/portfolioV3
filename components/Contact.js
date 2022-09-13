import { useRef } from 'react'

import styles from '../styles/components/Contact.module.css'

export default function Contact({selectedPanel}) {

  const onClickHandler = (event) => {
    console.log(event.target)
  }

  return (
    <div className={styles.contactContainer}>
      <div className={`${styles.contactFormContainer} ${selectedPanel === 'fifth' ? styles.contactFormContainerAnimate : ''}`}>
        <h1>Email Me At</h1>
        <h2>jshan431@gmail.com</h2>
        {/* <form>
          <div className={styles.formControl}>
            <input id={'name'} onClick={onClickHandler} type="text" required autoComplete="off"/>
            <label htmlFor={'name'}>Name</label>
          </div>

          <div className={styles.formControl}>
            <input type="email" required autoComplete="off"/>
            <label>Email</label>
          </div>

          <button className={styles.btn}>Send</button>

          <p className={styles.text}>Don't have an account? <a href="#">Register</a> </p>
        </form> */}
      </div>
    </div>


  )
}
