import React , {Component} from 'react';
import TodoItem from './todo_item';


export default class Main extends Component {

    constructor(props){
	super(props);
	this.state ={
	    isChecked : false
	}
    }

    

   	render(){
		return( 
		    this.props.todos.length > 0 ? this.props.todos.map((todo)=>{
			return (
			    <TodoItem todo = {todo}/>
			
			);
			}): <div></div>

			);
	}

    
}
