import { useState, useEffect } from 'react';
import styles from '../../../styles/pages/projects/toDoList.module.css';
export default function ToDo({toDo, toDoClickHandler, toDoRightClickHandler, index, toDoList}) {

  const [complete, setComplete] = useState(null)
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    // action on update of toDoList
    localStorage.setItem('todos', JSON.stringify(toDoList))
  }, [complete]);

  useEffect(() => {
    setComplete(toDo.completed)
    setFetched(true)
  }, []);

  const clickHandler = () => {
    setComplete(!complete)
    toDoClickHandler(index)
  }

  const rightClickHandler = (event) => {
    event.preventDefault()
    toDoRightClickHandler(event.target.value)
  }

  return (
    <>
      {fetched &&
        <li className={complete ? styles.completed : ''} onClick={clickHandler} onContextMenu={rightClickHandler} value={index}>{toDo.text}</li>
      }
    </>
  )
}

// className={complete ? styles.completed : ''}
//    <li key={i} onClick={toDoClickHandler} onContextMenu={toDoRightClickHandler}>{toDo}</li>