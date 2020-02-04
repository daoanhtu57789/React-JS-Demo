import React, { Component, } from 'react';
import './App.css';
// BrowserRouter là làm việc với web
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Menu from './components/Menu';
import routes from './routes';
//custom link

class App extends Component {

	render() {
		return (
			<Router>
				<div >
					{/* Nội dung */}
					{/* tương ứng với local.../ nó sẽ trả về trang của component Home */}
					{/* exact kiểm tra sự trùng lặp vì trong route cũng có dấu '/' */}
					{/* render ra các nút chứa link */}
					<Menu></Menu>
					<Switch>
						{/* <Route path="/" exact component={Home} />
						{/* tương ứng với local.../about nó sẽ trả về trang của component about */}
						{/* <Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route component={NotFound}></Route> */}
						{this.showContentMenu(routes)}
					</Switch>
				</div>
			</Router>
		);
	}
	showContentMenu = (routes) =>{
		let result = null;
		if(routes.length > 0){
			result = routes.map((route,index) =>{
				return(
					<Route
						key = {index}
						path = {route.path}
						exact = {route.exact}
						component = {route.main}
					></Route>
				);
			})
		}
		return result;
	}
}

export default App;
