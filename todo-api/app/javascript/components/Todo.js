import React from "react"
import PropTypes from "prop-types"
import Header from './header'
import Main from './main'
import Footer from './footer'

const URL = "http:://localhost:3000/api/v1/"

class Todo extends React.Component {

    constructor(props){
	super(props);
	this.state = {
	    todotext: '',
	    todos : []
	}
	this.newTodo = this.newTodo.bind(this);
    }

    componentDidMount(){
	fetch('api/v1/todos')
	    .then(function(response){
		console.log(response);
		return response.json();
	    })
	    .then((todos) =>{
		console.log(todos)
		this.setState({
		    todos: todos
		})
		console.log(this.state.todos)
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
		    todos: todos
		})
	    })
	
    }
    
    render () {
	return (
		<div>
		<Header onNewTodo={this.newTodo}/>
		<Main todos ={this.state.todos}/>
		<Footer />
		</div>
	);
    }
}

Todo.propTypes = {
    greeting: PropTypes.string
};
export default Todo
