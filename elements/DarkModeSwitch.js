import { useAppContext } from "../AppContext";
import styles from '../styles/elements/DarkModeSwitch.module.css';

export default function DarkModeSwitch() {

  const { state, dispatch } = useAppContext()

  const toggleDarkMode = () => {

    dispatch({type: 'toggle_darkMode'})

  }

  return (
    <label className={styles.switch} onClick={toggleDarkMode}>
      {/* <input type="checkbox" checked></input>
      <span className={`${styles.slider + ' ' +styles.round}`}></span> */}
      <div className={`${styles.slider} ${state.darkMode ? styles.sliderDark : ''}`}>
        <span className={`${styles.button} ${state.darkMode ? styles.buttonDark : ''}`}></span>
        <span className={`${styles.buttonLayer} ${state.darkMode ? styles.buttonLayerDark : ''}`}></span>
        <span className={`${styles.starSmall} ${state.darkMode ? styles.starSmallDark : ''}`}></span>
        <span className={`${styles.starLarge} ${state.darkMode ? styles.starLargeDark : ''}`}></span>
      </div> 
    </label>
  )
}
