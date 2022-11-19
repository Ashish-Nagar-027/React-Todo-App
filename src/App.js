import { useState } from 'react';
import './App.css';

function App() {
   
  const [items, setItems] = useState([])
   
  return (
    <div className="App">
        <h1>Todo List</h1>
        <div>
          <input type="text" placeholder="Add Task . . ."></input>
          <button>Add Task</button>
        </div>
        <hr />
        <div></div>
    </div>
  );
}

export default App;
