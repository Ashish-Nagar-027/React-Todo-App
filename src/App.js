import { useState } from 'react';
import './App.css';

function App() {
   
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
   
 function addTask() {
        setTodoList([...todoList, inputValue])
        setInputValue("")
 }

 const editTask = (e, key) => {
  console.log(todoList)
  console.log("edit " , e.target.value, key)
 }

 const deleteTask = (key) => {
     setTodoList((prevList) => prevList.filter((listItem,index) => index !==key))
 } 

  return (
    <div className="App">
        <h1>Todo List</h1>
        <div>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add Task . . ."></input>
          <button onClick={addTask}>Add Task</button>
        </div>
        <hr />
        <div>
          <div className='todo-container'>
            {
              todoList.map((value, key) => {
                return <div className='todo-item' key={key}>
                   <div className='todo-item-value'>
                       { value } 
                     </div>
                     <div className='btns'>
                        <button onClick={(e) => editTask(e, key) }>Edit</button>
                        <button onClick={() => deleteTask(key) }>Delete</button></div> 
                     </div>
              })             
            }
            </div>
        </div>
    </div>
  );
}

export default App;
