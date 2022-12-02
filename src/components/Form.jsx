import React from 'react'

const Form = ({inputValue, addTask, editId, isEditing , setInputValue , TitleValue,  setTitleValue}) => {

  const formhandler = (e) => {
    e.preventDefault()
  }


  return (
    <form onClick={(e) => formhandler(e)}>
      <div className="input-container">
        <input type="text"  placeholder="Add Title . . ." value={TitleValue} onChange={(e) => setTitleValue(e.target.value)}></input>
        <input type="text" value={inputValue} onKeyPress={(event) => {if(event.key === 'Enter'){addTask(editId) }}} onChange={(e) => setInputValue(e.target.value)} placeholder="Add Task . . ."></input>
      </div>
        <button className='addBtn' onClick={() => addTask(editId)}>{isEditing ? "Edit " : 'Add Task'}</button>
    </form>
  )
}

export default Form