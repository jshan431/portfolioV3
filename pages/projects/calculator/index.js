import { useState } from 'react';
import styles from '../../../styles/pages/projects/calculator.module.css';
export default function Calculator() {

  const [displayValue, setDisplayValue] = useState('0')
  const [firstValue, setFirstValue] = useState(null)
  const [operatorValue, setOperatorValue] = useState('')
  const [awaitingNextValue, setAwaitingNextValue] = useState(false)

  // Calculate first and second values depending on operator
  const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

    '=': (firstNumber, secondNumber) => secondNumber,
  }

  const numberBtnHandler = (event) => {
    console.log(event.target.value)
    const value = event.target.value
    // if(displayValue === '0'){
    //   setDisplayValue(event.target.value)
    // } else {
    //   setDisplayValue(`${displayValue}${value}`)
    // }
    if(awaitingNextValue){
      setDisplayValue(value)
      setAwaitingNextValue(false)
    } else {
      setDisplayValue(displayValue === '0' ? value : `${displayValue}${value}`)
    }
  }

  const decimalBtnHandler = (event) => {
    if(!displayValue.includes('.')){
      const value = event.target.value
      setDisplayValue(`${displayValue}${value}`)
    }
  }

  const operatorBtnHandler = (event) => {
    const currentValue = Number(displayValue)
    const operatorSelected = event.target.value

      // Prevent multiple operators
    if(awaitingNextValue && operatorValue){
      setOperatorValue(operatorSelected)
      return
    }

    // Assign firstValue if no value
    if(!firstValue){
      setFirstValue(currentValue)
    } else {
      const calculation = calculate[operatorValue](firstValue, currentValue);
      setDisplayValue(calculation)
      setFirstValue(calculation)
    }

    setAwaitingNextValue(true)
    setOperatorValue(operatorSelected)
  }

  // Reset all values, display
  const resetAll = () => {
    setFirstValue(0);
    setOperatorValue('');
    setAwaitingNextValue(false);
    setDisplayValue('0');
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.calculatorDisplay}>
            <h1>{displayValue}</h1>
        </div>
        <div className={styles.calculatorButtons}>
          <button className={styles.operator + ' ' + styles.button} value="+" onClick={operatorBtnHandler}>+</button>
          <button className={styles.operator + ' ' + styles.button} value="-" onClick={operatorBtnHandler}>-</button>
          <button className={styles.operator + ' ' + styles.button} value="*" onClick={operatorBtnHandler}>×</button>
          <button className={styles.operator + ' ' + styles.button} value="/" onClick={operatorBtnHandler}>÷</button>
          <button className={styles.button} value="7" onClick={numberBtnHandler}>7</button>
          <button className={styles.button} value="8" onClick={numberBtnHandler}>8</button>
          <button className={styles.button} value="9" onClick={numberBtnHandler}>9</button>
          <button className={styles.button} value="4" onClick={numberBtnHandler}>4</button>
          <button className={styles.button} value="5" onClick={numberBtnHandler}>5</button>
          <button className={styles.button} value="6" onClick={numberBtnHandler}>6</button>
          <button className={styles.button} value="1" onClick={numberBtnHandler}>1</button>
          <button className={styles.button} value="2" onClick={numberBtnHandler}>2</button>
          <button className={styles.button} value="3" onClick={numberBtnHandler}>3</button>
          <button className={styles.decimal + ' ' + styles.button} value="." onClick={decimalBtnHandler}>.</button>
          <button className={styles.button + ' ' + styles.button} value="0" onClick={numberBtnHandler}>0</button>
          <button className={styles.clear + ' ' + styles.button} onClick={resetAll}>C</button>
          <button className={styles.operator + ' ' + styles.equalSign + ' ' + styles.button} value="=" onClick={operatorBtnHandler}>=</button>
        </div>
      </div>
    </div>
  )
}
