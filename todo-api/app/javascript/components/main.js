import React , {Component} from 'react';
import TodoItem from './todo_item';


export default class Main extends Component {

    constructor(props){
	super(props);
	this.state ={
	    todos: props.todos
	}

	this.removeDestroyedTodo = this.removeDestroyedTodo.bind(this);
    }

    componentWillReceiveProps(nextProps){
	this.setState({
	    todos: nextProps.todos
	})
    }
   
    
    removeDestroyedTodo(destroyedTodo){
	console.log("clicked")
	this.setState({
	    todos: this.state.todos.filter(function(todo){
		return todo !== destroyedTodo
	    })
	});
    }

   	render(){
		return( 
		    this.state.todos.length > 0 ? this.state.todos.map((todo)=>{
			return (
				<TodoItem todo = {todo} onRemoveDestroyedTodo = {this.removeDestroyedTodo}/>
			
			);
			}): <div></div>

			);
	}

    
}
