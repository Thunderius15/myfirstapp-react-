import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';
import FormularioTareas from './components/FormularioTareas.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
          todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    removeTodo(index) {
        if(window.confirm('Are you sure want to delete it?')) {
            this.setState({
                todos: this.state.todos.filter((e, i) => {
                    return i !== index
                }) 
            })
        }
    }
    render() 
    {
        const tareas = this.state.todos.map((todo,i) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="" className="text-white">
                        Tasks
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state.todos.length}
                        </span>
                    </a>
                </nav>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-3">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <FormularioTareas onAddTodo={this.handleAddTodo}/>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8 col-xl-9">
                            <div className="row">
                                {tareas}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;