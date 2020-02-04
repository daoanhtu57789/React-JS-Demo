import React,{Component} from 'react';
//import logo from './logo.svg';
// import './App.css';
	
class Header extends Component{ //class là cách viết trong ES6 còn cũ là dùng function()
	render(){
		return (
			<div>
				<nav className="navbar navbar-inverse" >
					<div className="container-fluid">
						<a className="navbar-brand">Bài 2:Component</a>
						<ul className="nav navbar-nav">
							<li><a href="#">Trang Chủ</a></li>
							
							<li className="active"><a href="#">Danh mục sản phẩm</a></li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Header;
