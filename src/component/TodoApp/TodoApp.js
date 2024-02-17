import React, { useState } from 'react'
import "./TodoApp.css"


const TodoApp = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const storeItems = (event) => {
    event.preventDefault();
    setItems([...items, input]);
    setInput("");
  }

  const deleteItem = (key) => {
    setItems(items.filter((data, index) => index !== key));
  }

  return (
    <div className="todo-container">
      <form className="input-section" onSubmit={storeItems}>
        <h1>TodoApp</h1>
        <input type="text" value={input} onChange={handleChange} placeholder="Enter task here..." />
      </form>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data} <i onClick={() => deleteItem(index)} className="fa-solid fa-trash-can"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;


