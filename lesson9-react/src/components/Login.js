import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtUsername: '',
			txtPassword: ''
		};
	}

	onChange = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.type === 'checkbox' ?target.checked : target.value;
		this.setState({
			[name]: value
		})
	}

	// onSubmit = (event) =>{
	// 	event.preventDefault();//chặn load lại trang
		// let { txtUsername, txtPassword } = this.state;
		// if(txtUsername === 'admin' && txtPassword === 'admin'){
		// 	localStorage.setItem('user',JSON.stringify({
		// 		username : txtUsername,
		// 		password : txtPassword
		// 	}));
		// }
	// }

	onClick = () =>{
		let { txtUsername, txtPassword } = this.state;
		if(txtUsername === 'admin' && txtPassword === 'admin'){
			localStorage.setItem('user',JSON.stringify({
				username : txtUsername,
				password : txtPassword
			}));
		}
	}
	render() {
		let { txtUsername, txtPassword } = this.state;
		let loggedInUser = localStorage.getItem('user');
		let {location} = this.props;
		if (loggedInUser !== null){
			return(
				<Redirect
				to ={{
					pathname: '/products' ,//đường dẫn mà mình đi đến
					state:{
						from : location, //đến từ đâu
					}
				}}/>
			)
		}
		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<form >
						<legend>Đăng Nhập</legend>

						<div className="form-group">
							<label>Username :</label>
							<input
								type="text"
								className="form-control"
								name="txtUsername"
								placeholder="Nhập Tên"
								value={txtUsername}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label>Password :</label>
							<input
								type="password"
								className="form-control"
								name="txtPassword"
								placeholder="Nhập Password"
								value={txtPassword}
								onChange={this.onChange}
							/>
						</div>
						<Link to={loggedInUser !== null ?'/products':'/login'} onClick = {this.onClick} className='my-link' >
							<button type="submit" className="btn btn-primary">Đăng Nhập</button>
						</Link>
					</form>

				</div>
			</div>

		);
	}
}
export default Login;
