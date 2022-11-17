import { useState, useEffect } from 'react';
import styles from '../../../styles/pages/projects/toDoList.module.css';
import ToDo from './ToDo';
export default function ToDoList() {

  //const [inputText, setInputText] = useState('')
  const [toDo, setToDo] = useState("")
  const [toDoList, setToDoList] = useState([])
  const [fetched, setFetched] = useState(false)
  useEffect(() => {
    // action on update of toDoList
    if(fetched){
      localStorage.setItem('todos', JSON.stringify(toDoList))
    }
  }, [toDoList]);

  useEffect(() => {
    // can only store strings in local storage so we use JSON parse when we get it out
    const items = JSON.parse(localStorage.getItem('todos'));
    if (items) {
      setToDoList(items);
    }
    setFetched(true)
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    addToDo()
  }

  const addToDo = (todo) => {
    let todoText = toDo
    
    if(todo) {
      todoText = todo.text
    }

    if(todoText){
      setToDoList([...toDoList, {text: todoText, completed: false}])
    }
    setToDo("")
  }

  const toDoClickHandler = (index) => {
    let newArr = toDoList
    newArr[index].completed = !newArr[index].completed
  }

  const toDoRightClickHandler = (index) => {
    let newArr = [...toDoList.slice(0, index), ...toDoList.slice(index + 1)]
    setToDoList(newArr)
  }

  return (
    <div className={styles.container}>
      <h1>todos</h1>
      <form id="form" onSubmit={submitHandler}>
        <input 
          type="text" 
          className={styles.input} 
          id="input" 
          placeholder="Enter your todo" 
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <ul className={styles.todos} id="todos">
          {toDoList.map((toDo, i) => <ToDo key={i} index={i} toDo={toDo} toDoClickHandler={toDoClickHandler} toDoRightClickHandler={toDoRightClickHandler} toDoList={toDoList}/>)}
        </ul>
      </form>
      <small>Left click to toggle completed. <br/> Right click to delete todo</small>
    </div>
  )
}

