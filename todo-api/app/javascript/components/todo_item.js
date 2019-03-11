import React, {Component} from 'react';


export default class TodoItem extends Component {

    constructor(props){
	super(props);
	this.state = {
	    isChecked : props.todo.done,
	    isdestroyed : false
	}
	this.handleChange = this.handleChange.bind(this);
	this.onDestroy = this.onDestroy.bind(this);
    }

    componentWillReceiveProps(nextProps){
	this.setState({
	    isChecked : this.props.todo.done
	})
    }

    handleChange(event){
	
	fetch(`api/v1/todos/${this.props.todo.id}`, {
	    method: 'PATCH',
	    body: JSON.stringify({done: !this.props.todo.done}),
	    headers : {
		"Content-Type": "application/json"
	    }
	}).then((res) => res.json())
	    .then((data) => {
	this.setState({
	    isChecked: !this.props.todo.done
	})
	
	    })
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
	    className="toggle td-item"
	    defaultChecked = {this.state.isChecked}
	    onChange = {this.handleChange}
		/>
	 <span className="glyphicon glyphicon-circle-arrow-up custom-glyphicon"></span>
		<label className ="td-item">{todo.title}</label>
		<button type="button" class="close" aria-label="Close" onClick = {this.onDestroy}>
		<span aria-hidden="true">&times;</span>

	    
		</button>
		</div>	
		</li>
		</div>
	);
    }
}
