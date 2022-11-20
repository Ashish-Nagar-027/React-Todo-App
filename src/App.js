import { useState } from 'react';
import './App.css';

function App() {
   
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
   
 function addTask() {
        if(inputValue !== "") {
          setTodoList([...todoList, { task: inputValue, completed: false }])
          setInputValue("")
        }
 }

 const editTask = (key,valueObj) => {
    
    setInputValue(valueObj.task)
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
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add Task . . ."></input>
          <button onClick={addTask}>Add Task</button>
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
