import React , {Component} from 'react';

export default class Footer extends Component {

    constructor(props){
	super(props);
    }


    render(){
	return(
		<div>
		<ul className="side-by-side">
		<li><button> All</button></li>
		<li><button> Active </button></li>
		<li><button> Completed</button></li>
		</ul>
		</div>
	);
    }
}
