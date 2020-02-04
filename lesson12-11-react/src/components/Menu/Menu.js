import React, { Component} from 'react';
import {Route,Link} from 'react-router-dom';

const menus = [
    {
        name : "Trang Chủ", //tên của link
        to : '/',
        exact : true
    },
    {
        name : "Quản Lý Sản Phẩm", //tên của link
        to : '/product-list', //đường dẫn của link click vào sẽ đổi đường dẫn của trang web
        exact : false
    }
];

const MenuLink = ({label , to ,activeOnlyWhenExact}) =>{
    return <Route 
                path = {to}
                exact = {activeOnlyWhenExact}
                children = {({match}) => {
                    let active = match ? 'active' : '';
                    return(
                        <li className={active}>
                            <Link to = {to}>
                                {label}
                            </Link>
                        </li>
                    )
                }}
            />
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }

    showMenu = (menus) =>{
        let result = null;
        if(menus.length > 0){
            return(
                result = menus.map((menu,index) =>{
                    return <MenuLink 
                                key = {index}
                                label = {menu.name}
                                to = {menu.to}
                                activeOnlyWhenExact = {menu.exact}
                            />
                })
            );
        }
        return result;
    }
}
export default Menu;
