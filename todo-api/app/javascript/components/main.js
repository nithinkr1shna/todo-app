import React , {Component} from 'react';
import TodoItem from './todo_item';


export default class Main extends Component {

    constructor(props){
	super(props);
	this.state ={
	    todos: props.todos
	}

	this.removeDestroyedTodo = this.removeDestroyedTodo.bind(this);
	this.onCompletionStatusChanged =this.onCompletionStatusChanged.bind(this);
	this.onImportanceChanged = this.onImportanceChanged.bind(this);
    }

    componentWillReceiveProps(nextProps){
	this.setState({
	    todos: nextProps.todos
	})
    }

    onCompletionStatusChanged(changedTodo){
	var todos = this.props.todos;
	todos.forEach(function(todo){
	    if(todo.id == changedTodo.id){
		todo.done = !changedTodo.done;
	    }
	})
	this.setState({
	    todos: todos
	})

	
    }

    onImportanceChanged(changedTodo){
	var todos = this.props.todos;
	todos.forEach(function(todo){
	    if(todo.id == changedTodo.id){
		todo.important = !changedTodo.important;
	    }
	})
	this.setState({
	    todos: todos
	})


    }
   
    
    removeDestroyedTodo(destroyedTodo){
	console.log("clicked")
	var todos = this.state.todos.filter(function(todo){
	    return todo != destroyedTodo
	})
	this.setState({
	    todos: todos
	})
	this.props.onTodosChanged(todos);
    }

   	render(){
		return( 
		    this.state.todos.length > 0 ? this.state.todos.map((todo)=>{
			return (
				<TodoItem todo = {todo}
			    onRemoveDestroyedTodo = {this.removeDestroyedTodo}
			    onCompletionStatusChanged ={this.onCompletionStatusChanged}
			    onImportanceChanged = {this.onImportanceChanged} />
			
			);
			}): <div></div>

			);
	}

    
}
