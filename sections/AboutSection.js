import { useState } from 'react';
import styles from '../styles/sections/AboutSection.module.css';

export default function AboutSection() {

  const [selectedPanel, setSelectedPanel] = useState('first')

  const panelClick = (str) =>{
    setSelectedPanel(str)
  }

  return (
    <section className={styles.container}>
      <div className={`${styles.panel} ${selectedPanel === 'first' ? styles.active : ''}`} onClick={() => panelClick('first')} style={{backgroundImage: "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>
        <h3>About Me</h3>
      </div>
      <div className={`${styles.panel} ${selectedPanel === 'second' ? styles.active : ''}`} onClick={() => panelClick('second')} style={{backgroundImage: "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>
        <h3>Technologies</h3>
      </div>
      <div className={`${styles.panel} ${selectedPanel === 'third' ? styles.active : ''}`} onClick={() => panelClick('third')} style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')"}}>
        <h3>Photos</h3>
      </div>
      <div className={`${styles.panel} ${selectedPanel === 'fourth' ? styles.active : ''}`} onClick={() => panelClick('fourth')} style={{backgroundImage: "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')"}}>
        <h3>Clients</h3>
      </div>
      <div className={`${styles.panel} ${selectedPanel === 'fifth' ? styles.active : ''}`} onClick={() => panelClick('fifth')} style={{backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>
        <h3>Contact</h3>
      </div>
    </section>
  )
}

// style={{backgroundImage: "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"}}