import { useState } from 'react';
import './App.css';

function App() {
   
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editId,setEditId] = useState('')
   
 function addTask(key) {
        if(inputValue !== "") {
          if(!isEditing){
            setTodoList([...todoList, { task: inputValue, completed: false }])
            setInputValue("")
          }
         else {
          setTodoList((todoList.map((item,index) => {
            if(index === key) {
              return {...item , task: inputValue }
            }
            return item
           }
            )))
            setInputValue("")
           setIsEditing(false)
           setEditId('')

        }
      }
 }

 const editTask = (key,valueObj) => {
    setIsEditing(true)
    setInputValue(valueObj.task)
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

  return (
    <div className="App">
        <h1>Todo List</h1>
        <div>
          <input type="text" value={inputValue} onKeyPress={(event) => {if(event.key === 'Enter'){addTask(editId) }}} onChange={(e) => setInputValue(e.target.value)} placeholder="Add Task . . ."></input>
          <button onClick={() => addTask(editId)}>{isEditing ? "Editing " : 'Add Task'}</button>
        </div>
        <hr />
        <div>
          <div className='todo-container'>
            {
              todoList.map((valueObj, key) => {
                return <div className='todo-item' key={key}>
                   <div className='todo-item-value'>
                       { valueObj.task } 
                     </div>
                     <div className='btns'>
                        <button onClick={() => editTask(key,valueObj) }>Edit</button>
                        <button onClick={() =>  deleteTask(key) }>Delete</button> 
                        <button onClick={() =>  completeTask(key) }>{valueObj.completed ? "Completed": "Not Completed"}</button>
                      </div> 
                     </div>
              })             
            }
            </div>
        </div>
    </div>
  );
}

export default App;
