import React, { Component } from 'react'
import "./App.css";
import {v4 as uuidv4} from "uuid";

export class App extends Component {
    state = {
        todoArray: [
            {
                id: uuidv4(),
                todo: "wash dishes",
            },
            {
                id: uuidv4(),
                todo: "walk dog",
            },
            {
                id: uuidv4(),
                todo: "homework",
            }
        ],
        newTodo: "",
    }

    handleOnInputChange = (event) => {
        console.log(this.state.newTodo)
        this.setState({
            newTodo: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let newArray = [...this.state.todoArray, {id: this.state.todoArray.length + 1, todo: this.state.newTodo}]
        this.setState({
            todoArray: newArray,
        })
    }

    showTodoArray = () => {
        return (
            <ul>
                {this.state.todoArray.map(({ todo, id }) => (
                    <li key={id}>{todo}</li>
                ))}
            </ul>
        )
    }
clearTodo =()=>{
    this.setState({
        newTodo: this
    })
        
    

    
}

    render() {
        const { newTodo } = this.state
        return (
            <div className="App">
                <form onSubmit={this.handleOnSubmit}>
                    <label>Add Todo:</label>
                    <input name="newTodo" value={newTodo} onChange={this.handleOnInputChange}></input>
                    <button onClick={this.clearTodo}>Submit</button>
                </form>
                {this.showTodoArray()}
            </div>
        );
    }
}

export default App
