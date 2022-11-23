import React from 'react'

const Form = ({inputValue, addTask, editId, isEditing , setInputValue }) => {
  return (
    <div>
        <input type="text" value={inputValue} onKeyPress={(event) => {if(event.key === 'Enter'){addTask(editId) }}} onChange={(e) => setInputValue(e.target.value)} placeholder="Add Task . . ."></input>
        <button className='addBtn' onClick={() => addTask(editId)}>{isEditing ? "Edit " : 'Add Task'}</button>
    </div>
  )
}

export default Form