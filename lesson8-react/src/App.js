import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainers from './containers/ProductsContainers';
import CartContainers from './containers/CartContainers';
import MessageContainers from './containers/MessageContainers';
class App extends Component {
	render() {
		return (
			<div className="hidden-sn animated deep-purple-skin">
				{/*Header*/}
				<Header></Header>
				{/*Main*/}
				<main id="mainContainer">
					<div className="container">
						{/* Products */}
						<ProductsContainers></ProductsContainers>
						{/* Message */}
						<MessageContainers></MessageContainers>
						{/* Cart */}
						<CartContainers></CartContainers>
					</div>
				</main>
				{/* Footer */}
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
