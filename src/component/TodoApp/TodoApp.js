import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {

  state = {
    input:"",
    items:[]
  }

  handleChange = (event)=>{
      this.setState({
        input: event.target.value
        
      })
  }

  storeItems = (event)=>{
    event.preventDefault()
    const {input} = this.state;
    this.setState({
      items:[...this.state.items,input],
      input:""
    })
  }

  deleteItem = (key)=>{
    this.setState({
      items : this.state.items.filter((data, index)=>index !== key)
    })
  }

  render() {
    const {input, items} = this.state
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input type="text" value={input} onChange={this.handleChange} placeholder="Enter task here..." />
        </form>
        <ul>
          {items.map((data, index)=>(
            <li key={index}>{data} <i onClick={()=>this.deleteItem(index)} className="fa-solid fa-trash-can"></i></li>
          ))}
        </ul>
      </div>
    );
  }
}
