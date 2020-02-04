import React,{Component} from 'react';
import Header from './Components/Header';
import ProductsContainer from './Containers/ProductsContainers';
import Footer from './Components/Footer';
import CartContainers from './Containers/CartContainers';

import MessageContainers from './Containers/MessageContainers';

class App extends Component{
	render(){
		return(
			<div className="hidden-sn animated deep-purple-skin">
  				{/* Header */}
				<Header/>
			  	{/* Menu */}
				<main id="mainContainer">
					<div className="container">
						{/* Products */}
						<ProductsContainer></ProductsContainer>
						{/* Message */}
						<MessageContainers></MessageContainers>
						{/* Cart */}
						<CartContainers></CartContainers>
					</div>
				</main>
				{/* Footer */}
				<Footer></Footer>
			</div>
		)
	}
}
export default App;
