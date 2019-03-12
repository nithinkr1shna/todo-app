import React, {Component} from 'react';


export default class Header extends Component {
    constructor(props){
	super(props);
	this.state = {
	    value: '',
	    todoText: ''
	};
	this.handleChange = this.handleChange.bind(this);
	this.keyPress = this.keyPress.bind(this);
    }

    handleChange(event){
	this.setState({
	    value : event.target.value
	})
    }

    keyPress(event){
	if(event.key == 'Enter'){
	    this.setState({
		todoText: this.state.value,
	    })
	    
	    this.props.onNewTodo(this.state.value)
	}
    }

    render(){
	return(
	    <div className= "input">
		<input className="new-todo" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} placeholder="What needs to be done!"/>
		</div>
	);
    }
}


