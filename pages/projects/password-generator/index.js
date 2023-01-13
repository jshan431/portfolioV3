import { useState, useRef} from 'react';
import styles from '../../../styles/pages/projects/passwordGenerator.module.css';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function passwordGenerator() {

  const textAreaRef = useRef(null);

  const [length, setLength] = useState(10)
  const [incUppercase, setIncUppercase] = useState(true)
  const [incLowercase, setIncLowercase] = useState(true)
  const [incNumbers, setIncNumbers] = useState(true)
  const [incSymbols, setIncSymbols] = useState(true)
  const [password, setPassword] = useState("")
  
  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }

  const lengthHandler = (event) => {
    setLength(event.target.value)
  }

  const generatePasswordHandler = () => {
    const pwLength = length
    const hasUpper = incUppercase
    const hasLower = incLowercase
    const hasNumber = incNumbers
    const hasSymbol = incSymbols
    setPassword(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, pwLength))
    //console.log(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, pwLength))
  }

  const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    if(typesCount === 0) {
      return ''
    }
    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
          const funcName = Object.keys(type)[0]
          generatedPassword += randomFunc[funcName]()
      })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
  }

  const incUppercaseHandler = () => {
    setIncUppercase(prev => (!prev))
  }

  const incLowercaseHandler = () => {
    setIncLowercase(prev => (!prev))
  }

  const incNumbersHandler = () => {
    setIncNumbers(prev => (!prev))
  }

  const incSymbolsHandler = () => {
    setIncSymbols(prev => (!prev))
  }

  const clipboardHandler = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!')
  }

  return (
    <div className={styles.container}>
      <div className={styles.passwordGeneratorContainer}>
        <h2>Password Generator</h2>
        <div className={styles.resultContainer}>
          {/* <span>{password}</span> */}
          <input ref={textAreaRef} type="text" value={password} className={styles.result} maxLength="20"/>
          <button className={styles.btn} id="clipboard" onClick={clipboardHandler}>
            <FontAwesomeIcon icon={faClipboard} />
          </button>
        </div>
        <div className="settings">
          <div className={styles.setting}>
            <label>Password Length</label>
            <input type="number" id="length" min="4" max="20" value={length} onChange={lengthHandler}/>
          </div>
          <div className={styles.setting}>
            <label>Include uppercase letters</label>
            <input type="checkbox" id="uppercase" checked={incUppercase} onChange={incUppercaseHandler}/>
          </div>
          <div className={styles.setting}>
            <label>Include lowercase letters</label>
            <input type="checkbox" id="lowercase" checked={incLowercase} onChange={incLowercaseHandler}/>
          </div>
          <div className={styles.setting}>
            <label>Include numbers</label>
            <input type="checkbox" id="numbers" checked={incNumbers} onChange={incNumbersHandler}/>
          </div>
          <div className={styles.setting}>
            <label>Include symbols</label>
            <input type="checkbox" id="symbols" checked={incSymbols} onChange={incSymbolsHandler}/>
          </div>
        </div>
        <button className={styles.btn + " " + styles.btnLarge} id="generate" onClick={generatePasswordHandler}>
          Generate Password
        </button>
      </div>
    </div>
  )
}