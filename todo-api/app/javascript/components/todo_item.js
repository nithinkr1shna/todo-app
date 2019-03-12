import React, {Component} from 'react';


export default class TodoItem extends Component {

    constructor(props){
	super(props);
	this.state = {
	    isChecked : props.todo.done,
	    isdestroyed : false,
	    isImportant : props.todo.important
	}
	this.handleChange = this.handleChange.bind(this);
	this.onDestroy = this.onDestroy.bind(this);
	this.setImportant = this.setImportant.bind(this);
    }

    componentWillReceiveProps(nextProps){
	this.setState({
	    isChecked : this.props.todo.done,
	    isImportant: this.props.todo.important
	})
    }

    setImportant(event){
	var isImportant = this.state.isImportant;
	fetch(`api/v1/todos/${this.props.todo.id}`, {
	    method: 'PATCH',
	    body: JSON.stringify({important: !isImportant}),
	    headers : {
		"Content-Type": "application/json"
	    }
	}).then((res) => res.json())
	    .then((data) => {
	this.setState({
	    isImportant: !isImportant
	})
	
	    })
	console.log(this.state.isImportant);
	
	var todo = this.props.todo;
	todo.important = !isImportant;
	this.props.onImportanceChanged(todo);
    }

    handleChange(event){
	
	fetch(`api/v1/todos/${this.props.todo.id}`, {
	    method: 'PATCH',
	    body: JSON.stringify({done: !this.state.isChecked}),
	    headers : {
		"Content-Type": "application/json"
	    }
	}).then((res) => res.json())
	    .then((data) => {
	this.setState({
	    isChecked: !this.state.isChecked
	})
	
	    })

	var todo = this.props.todo;
	todo.done = this.state.isChecked;
	this.props.onCompletionStatusChanged(todo);
	
	
    }

    onDestroy(event){
	fetch(`api/v1/todos/${this.props.todo.id}`, {
	    method: 'DELETE',
	    headers: {
			"Content-Type": "application/json"
	    }
	}).then((res)=> res.json())
	    .then((data) => {
		console.log(data)
	    })
	this.props.onRemoveDestroyedTodo(this.props.todo);
    }

    render(){
	var todo = this.props.todo;
	console.log(this.props.todo.done)
	return(
	    <div className = "todo-list">
		<li key ={todo.created_at}>  
		<div>
		<input type="checkbox"
	    className="toggle td-item  checkbox-round"
	    defaultChecked = {this.state.isChecked}
	    onChange = {this.handleChange}
		/>
		<span className = {"glyphicon glyphicon-circle-arrow-up custom-glyphicon " +
				   (this.state.isImportant ? ' selected': '')}
	    onClick = {this.setImportant}
	    
		></span>
		<label className ="td-item">{todo.title}</label>
		<button type="button" className="close" aria-label="Close" onClick = {this.onDestroy}>
		<span aria-hidden="true">&times;</span>

	    
		</button>
		</div>	
		</li>
		</div>
	);
    }
}
