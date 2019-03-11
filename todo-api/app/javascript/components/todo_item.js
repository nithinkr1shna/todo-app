import React, {Component} from 'react';

export default class TodoItem extends Component {

    constructor(props){
	super(props);
	this.state = {
	    isChecked : this.props.todo.done,
	    isdestroyed : false
	}
	this.handleChange = this.handleChange.bind(this);
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

    render(){
	var todo = this.props.todo;
	console.log(this.props.todo.done)
	return(
		<li key ={todo.created_at}>  
		<div>
		<input type="checkbox"
	    className="toggle td-item"
	    defaultChecked = {this.state.isChecked}
	    onChange = {this.handleChange}
		/>
		<span className = "icon">icon </span>
		<label className ="td-item">{todo.title}</label>
		<button className ="destroy"></button>
		</div>	
		</li>				
	);
    }
}
