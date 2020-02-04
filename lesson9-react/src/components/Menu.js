import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';

const menus = [
	{
		name : "Trang Chủ",
		to : '/',
		exact : true
	},
	{
		name : "Giới Thiệu",
		to : '/about',
		exact : false
	},
	{
		name : "Liên Hệ",
		to : '/contact',
		exact : false
	},
	{
        name : 'Sản Phẩm',
        to : '/products',
        exact : false
	},
	{
        name : 'Đăng nhập',
        to : '/login',
        exact : false
    },
];
const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
	return (
		<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
			var active = match ? 'active abc' : '';
			return (
				//có thể dùng NavLink thay cho thẻ Link
				<li className={active}>
					<Link to={to} className='my-link' >{lable}</Link>
				</li>
			);

		}}></Route>
	);
}
class Menu extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">
					{/* <li>
					{/* có thể sử dụng activeClassName="" chứa class mà mình muốn sử dụng khi đc chọn */}
					{/*<NavLink activeStyle={{
						backgroundColor :'white',
						color:'red'
					}} exact to="/" className = "my-link">Trang Chủ</NavLink>
				</li>
				<li>
					<NavLink activeStyle={{
						backgroundColor :'white',
						color:'red'
					}}to="/about" className = "my-link">Giới Thiệu</NavLink>
				</li>
				<li>
					<NavLink activeStyle={{
						backgroundColor :'white',
						color:'red'
					}}to="/contact" className = "my-link">Liên Hệ</NavLink>
					
				</li> */}
					{/* <MenuLink lable="Trang Chủ" to='/' activeOnlyWhenExact={true} ></MenuLink>
					<MenuLink lable="Giới Thiệu" to='/about' activeOnlyWhenExact={false} ></MenuLink>
					<MenuLink lable="Liên Hệ" to='/contact' activeOnlyWhenExact={false} ></MenuLink> */}
					{this.showMenu(menus)}
				</ul>
			</nav>
		);
	}
	showMenu = (menus) =>{
		var result = null;
		if(menus.length > 0){
			result = menus.map((menu,index) =>{
				return (
					<MenuLink 
					lable={menu.name} 
					to={menu.to} 
					activeOnlyWhenExact={menu.exact} 
					key = {index} 
				></MenuLink>
				);
			})
		}
		return result;
	}
}
export default Menu;
