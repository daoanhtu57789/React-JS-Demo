import React,{Component} from 'react';


class Reset extends Component{
	constructor(props){
        super(props);
	   //khai báo các size có thể
    }

	onReset(color,size){
		color = 'red';
		size = 12;
		this.props.onReceiveReset(color,size);
	}

	render(){
		return(
			<button type="button" className="btn btn-lg btn-primary" onClick = {() => this.onReset(this.props.color,this.props.fontsize)}>Reset</button>
		);
	}
}

export default Reset;
