import { useState, useEffect } from 'react';
import styles from '../../../styles/pages/projects/toDoList.module.css';
export default function ToDo({toDo, toDoClickHandler, toDoRightClickHandler, index, toDoList}) {

  const [complete, setComplete] = useState(false)
  
  useEffect(() => {
    // action on update of toDoList
    localStorage.setItem('todos', JSON.stringify(toDoList))
  }, [complete]);

  const clickHandler = () => {
    setComplete(!complete)
    toDoClickHandler(index)
  }

  const rightClickHandler = (event) => {
    event.preventDefault()
    toDoRightClickHandler(event.target.value)
  }

  return (
    <li className={complete ? styles.completed : ''} onClick={clickHandler} onContextMenu={rightClickHandler} value={index}>{toDo.text}</li>
  )
}

// className={complete ? styles.completed : ''}
//    <li key={i} onClick={toDoClickHandler} onContextMenu={toDoRightClickHandler}>{toDo}</li>