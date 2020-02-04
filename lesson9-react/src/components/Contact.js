import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';
class Contact extends Component{
	constructor(props){
		super(props);
		this.state={
			isChecked : false
		}
	}

	onClick =  (isChecked) =>{
		this.setState({
			isChecked : isChecked
		})
	}
	render(){
		return(
			<div>
				Đây là trang liên hệ.<br></br>
				<button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>Cho Phép</button><br></br>
				<button type="button" className="btn btn-danger" onClick={() => this.onClick(true)} >Không Cho Phép</button><br></br>
				<Prompt
				 
					when = {this.state.isChecked} //khi nào muốn nó hiển thị thông báo
					message = {location => (`Bạn có muốn chắc chắn đi đến ${location.pathname}`)} //location.pathname đích đến 
				/>	
			</div>
		);
	}
}
export default Contact;
