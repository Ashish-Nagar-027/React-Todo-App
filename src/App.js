import { useState,useEffect } from 'react';

import Form from './components/Form';
import './App.css';
import TodoContainer from './components/TodoContainer';

function App() {

  // get from local 
  function getLocalStorage() {
    let todoList = localStorage.getItem('todoList')
    // console.log(todoList)
    if(todoList){
      return JSON.parse(todoList)
    }
    else{
      return []
    }
  }
   
  const [todoList, setTodoList] = useState(getLocalStorage())
  const [inputValue, setInputValue] = useState("")
  const [TitleValue, setTitleValue] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editId,setEditId] = useState('')
   
 function addTask(key) {
        if(inputValue !== "" && TitleValue !=="") {
          if(!isEditing){
            setTodoList([...todoList, { task: inputValue, TitleValue:TitleValue, completed: false }])
            console.log(todoList)
            setInputValue("")
            setTitleValue("")

          }
         else {
          setTodoList((todoList.map((item,index) => {
            if(index === key) {
              return {...item , task: inputValue ,TitleValue:TitleValue, }
            }
            return item
           }
            )))
            setTitleValue("")
            setInputValue("")
            setIsEditing(false)
            setEditId('')
        }
      }
 }

 const editTask = (key,valueObj) => {
    setIsEditing(true)
    setInputValue(valueObj.task)
    setTitleValue(valueObj.TitleValue)
    setEditId(key)
 }

 const deleteTask = (key) => {
     setTodoList((prevList) => prevList.filter((listItem,index) => index !==key))
 } 

 const  completeTask = (key) => {
     setTodoList((todoList.map((item,index) => {
      if(index === key) {
        return { ...item,completed : !item.completed }
      }
      return item
     } )))
  }

  // saving to local
  useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
  },[todoList])

  return (

    <div className="App">
        <h1>Todo List</h1>
        <Form inputValue={inputValue} TitleValue={TitleValue} setTitleValue={setTitleValue} setInputValue={setInputValue} editId={editId} isEditing={isEditing} setIsEditing={setIsEditing} addTask={addTask} />
        <hr />
        <TodoContainer editTask={editTask} todoList={todoList} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
    
  );
}

export default App;
