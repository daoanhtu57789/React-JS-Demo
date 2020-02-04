import React, { Component } from 'react';
import {Route , Link} from 'react-router-dom';
//tạo menu 
const menus = [
	{
		name : 'Trang Chủ',
		to : '/',
		exact : true
	},
	{
		name : 'Quản Lý Sản Phẩm',
		to : '/product-list',
		exact : false
	}
];
//tạo thẻ link theo yêu cầu	
const MenuLink = ({lable,to,activeOnlyWhenExact}) =>{
	return (
		<Route 
			path = {to}
			exact = {activeOnlyWhenExact}
			children = {({match}) => {
				let active = match ? 'active' : ''
				return (
					<li className = {active}>
						<Link to={to}>
							{lable}
						</Link>
					</li>
				);
				
			}}
		/>
	);
}


class Menu extends Component {
	render() {
		return (
			<div>
				<div className="navbar navbar-default">
					<a className="navbar-brand" >Call API</a>
					<ul className="nav navbar-nav">
						{this.showMenus(menus)}
					</ul>
				</div>			
			</div>
		);
	}

	showMenus = (menus) =>{
		let result = null;
		if(menus.length > 0){
			return (
				result = menus.map((menu,index) =>{
					return(
						<MenuLink 
							key = {index}
							lable = {menu.name}
							to = {menu.to}
							activeOnlyWhenExact = {menu.exact}
						/>
					);
				})
			);
		}
		return result;
	}
}

export default Menu;
