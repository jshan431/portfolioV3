import { useState } from 'react';
import styles from '../styles/sections/AboutSection.module.css';
import Technologies from '../components/Technologies';
import AboutMe from '../components/AboutMe';
import Photos from '../components/Photos';
import Contact from '../components/Contact';
import Clients from '../components/Clients';
import { useMediaQuery } from 'react-responsive'
export default function AboutSection() {

  const [selectedPanel, setSelectedPanel] = useState('first')

  const panelClick = (str) =>{
    setSelectedPanel(str)
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 931px)'
  })

  console.log(selectedPanel)

  return (
    <section className={styles.container}>
      <div className={`${styles.panel} ${styles.panel01} ${selectedPanel === 'first' ? styles.active : ''}`} onClick={() => panelClick('first')}>
        <AboutMe selectedPanel={selectedPanel}/>
        <h3>About Me</h3>
      </div>

      <div className={`${styles.panel} ${styles.panel02} ${selectedPanel === 'second' ? styles.active : ''}`} onClick={() => panelClick('second')}>
        <Technologies selectedPanel={selectedPanel}/>
        <h3>Technologies</h3>
      </div>


      <div className={`${styles.panel} ${styles.panel03} ${selectedPanel === 'third' ? styles.active : ''}`} onClick={() => panelClick('third')}>
        <Photos selectedPanel={selectedPanel}/>
        <h3>Photos</h3>
      </div>

      <div className={`${styles.panel} ${styles.panel04} ${selectedPanel === 'fourth' ? styles.active : ''}`} onClick={() => panelClick('fourth')}>
        <Clients/>
        <h3>Clients</h3>
      </div>

      <div className={`${styles.panel} ${styles.panel05} ${selectedPanel === 'fifth' ? styles.active : ''}`} onClick={() => panelClick('fifth')}>
        <Contact selectedPanel={selectedPanel}/>
        <h3>Contact</h3>
      </div>
    </section>
  )
}

// style={{backgroundImage: "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"}}

/**


        <div className={`${styles.panel} ${styles.panel01} ${styles.active}`}>
          <AboutMe selectedPanel={selectedPanel}/>
          <h3>About Me</h3>
        </div>

 */

/*

    <section className={styles.container}>
      {isDesktopOrLaptop ?
        <div className={`${styles.panel} ${styles.panel01} ${selectedPanel === 'first' ? styles.active : ''}`} onClick={() => panelClick('first')}>
          <AboutMe selectedPanel={selectedPanel}/>
          <h3>About Me</h3>
        </div>
        :
        <div className={`${styles.panel} ${styles.panel01} ${styles.active}`}>
          <AboutMe selectedPanel={'first'}/>
          <h3>About Me</h3>
        </div>
      }
      {isDesktopOrLaptop ?
        <div className={`${styles.panel} ${styles.panel02} ${selectedPanel === 'second' ? styles.active : ''}`} onClick={() => panelClick('second')}>
          <Technologies selectedPanel={selectedPanel}/>
          <h3>Technologies</h3>
        </div>
        :
        <div className={`${styles.panel} ${styles.panel02} ${styles.active }`}>
          <Technologies selectedPanel={'second'}/>
          <h3>Technologies</h3>
        </div>
      }
      {isDesktopOrLaptop ?
        <div className={`${styles.panel} ${styles.panel03} ${selectedPanel === 'third' ? styles.active : ''}`} onClick={() => panelClick('third')}>
          <Photos selectedPanel={selectedPanel}/>
          <h3>Photos</h3>
        </div>
      :
        <div className={`${styles.panel} ${styles.panel03} ${styles.active}`}>
          <Photos selectedPanel={'third'}/>
          <h3>Photos</h3>
        </div>
      }
      {isDesktopOrLaptop ?
        <div className={`${styles.panel} ${styles.panel04} ${selectedPanel === 'fourth' ? styles.active : ''}`} onClick={() => panelClick('fourth')}>
          <Clients/>
          <h3>Clients</h3>
        </div>
      :
        <div className={`${styles.panel} ${styles.panel04} ${styles.active} `}>
          <Clients selectedPanel={'fourth'}/>
          <h3>Clients</h3>
        </div>
      }
      <div className={`${styles.panel} ${styles.panel05} ${selectedPanel === 'fifth' ? styles.active : ''}`} onClick={() => panelClick('fifth')}>
        <Contact selectedPanel={selectedPanel}/>
        <h3>Contact</h3>
      </div>
    </section>

*/