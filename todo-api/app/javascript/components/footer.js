import React , {Component} from 'react';

export default class Footer extends Component {

    constructor(props){
	super(props);
    }


    render(){
	return(
		<div>
		<ul className="side-by-side">
		<li><button onClick= {this.props.onAllButtonClick}> All</button></li>
		<li><button onClick ={this.props.onActiveButtonClick}> Active </button></li>
		
		</ul>
		</div>
	);
    }
}
