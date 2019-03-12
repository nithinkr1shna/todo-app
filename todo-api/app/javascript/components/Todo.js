import React from "react"
import PropTypes from "prop-types"
import Header from './header'
import Main from './main'
import Footer from './footer'
import '../../assets/stylesheets/application.css'

const URL = "http:://localhost:3000/api/v1/"

class Todo extends React.Component {

    constructor(props){
	super(props);
	this.state = {
	    todotext: '',
	    todos : [],
	    allTodos :[]
	}
	this.newTodo = this.newTodo.bind(this);
	this.activeButtonClick = this.activeButtonClick.bind(this);
	this.allButtonClick = this.allButtonClick.bind(this);
	this.onTodosChanged = this.onTodosChanged.bind(this);
	this.onCompletionOrImportanceChange = this.onCompletionOrImportanceChange.bind(this);
	this.getAllTodos = this.getAllTodos.bind(this);
 }

    componentDidMount(){
	this.getAllTodos();
    }

    getAllTodos(){
	fetch('api/v1/todos')
	    .then(function(response){
		console.log(response);
		return response.json();
	    })
	    .then((todos) =>{
		console.log(todos)
		this.setState({
		    todos: todos,
		    allTodos : todos
		})
		console.log(this.state.todos)
	    })
	    .catch(error => console.error(error));
    }

    onTodosChanged(todos){
	this.setState({
	    todos:todos,
	    allTodos: todos
	})
    }

    onCompletionOrImportanceChange(changedTodos){
	this.setState({
	    todos: changedTodos,
	    allTodos: changedTodos
	})
    }
    
    activeButtonClick(){
	var todos = this.state.allTodos;
	this.setState({
	    todos: todos.filter((todo) => todo.done == false)
	})
	console.log(this.state.todos)
	
    }

    
    allButtonClick(){
	this.setState({
	    todos: this.state.allTodos
	})
    }
    
    
    newTodo(todo){
	fetch('api/v1/todos', {
	    method: 'POST',
	    body: JSON.stringify({title: todo, done: false, important: false }),
	    headers: {
		"Content-Type": "application/json"
	    }
	}).then((res) => res.json())
	    .then((data) => {
		var todos = this.state.todos
		todos.push(data)
		this.setState({
		    todos: todos,
		    allTodos: todos
		})
	    })
	    .catch(error => console.error(error));
	this.getAllTodos();
    }
    
    render () {
	return (
		<div>
		<Header onNewTodo={this.newTodo}/>
		<Main todos ={this.state.todos}
	    onTodosChanged ={this.onTodosChanged}
	    onCompletionOrImportanceChange = {this.onCompletionOrImportanceChange}
		/>
		<Footer onAllButtonClick = {this.allButtonClick}
	    onActiveButtonClick = {this.activeButtonClick}
	    onCompletedButtonClick = {this.completedButtonClick}/>
		</div>
	);
    }
}

Todo.propTypes = {
    greeting: PropTypes.string
};
export default Todo
