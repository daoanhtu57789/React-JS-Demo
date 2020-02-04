import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
class App extends Component {
	render() {
		return (
			<Router>
				{/*bọc thẻ này thay thẻ div nó sẽ không ảnh hưởng đến CSS hay gì cả */}
				<Fragment>
					<Menu></Menu>
					<div className="container">
						{this.showContentMenu(routes)}
						{/* duyệt các routes để hiển thị ra các component tương ứng với main ở routes*/}
					</div>
				</Fragment>
			</Router>
		);
	}

	showContentMenu = (routes) =>{
		let result = null;
		if(routes.length > 0){
			result = routes.map((route,index) =>{
				return (
					<Route
						// truyền các dữ liệu vào route khi route có các giá trị thì sẽ hiện component ra
						key = {index}
						path = {route.path}
						exact = {route.exact}
						component = {route.main}
					/>
				);
			})
		}
		return <Switch>{result}</Switch>;
	}
}

export default App;
