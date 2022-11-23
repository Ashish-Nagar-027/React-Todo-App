import React from 'react'
import { FaEdit, FaCheck } from 'react-icons/fa'
import { AiTwotoneDelete } from "react-icons/ai";

const TodoContainer = ({editTask,deleteTask,completeTask,todoList}) => {
  return (
    <div>
        <div className='todo-container'>
            {
              todoList.map((valueObj, key) => {
                return <div className='todo-item' key={key}>
                   <div className={ valueObj.completed ? 'todo-item-value completed-task' :'todo-item-value'}>
                       { valueObj.task } 
                     </div>
                     <div className='btns'>
                        <button onClick={() => editTask(key,valueObj) }> <FaEdit /> </button>
                        <button onClick={() =>  deleteTask(key) }> <AiTwotoneDelete /></button> 
                        <button onClick={() =>  completeTask(key) }> <FaCheck /> </button>
                      </div> 
                     </div>
              })             
            }
            </div>
        </div>
  )
}

export default TodoContainer