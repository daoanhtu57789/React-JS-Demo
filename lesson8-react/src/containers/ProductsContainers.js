import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {actAddToCart} from './../actions/index';
import {actChangeMessage} from './../actions/index';
class ProductsContainers extends Component {
	render() {
		var { products } = this.props;
		return (
			<Products>
				{this.showProducts(products)}{/*chuyền vào dạng children */}
			</Products>
		);
	}


	showProducts(products) {
		let result = null;
		let {onAddToCart,onChangeMessage} = this.props;	
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product 
					key={index} 
					product={product} 
					onAddToCart={onAddToCart}
					onChangeMessage = {onChangeMessage}
				/>
			});
		}
		return result;
	}
}
//checktype //isrequired bắt buộc phải có
ProductsContainers.propTypes = {
	products : PropTypes.arrayOf(
		PropTypes.shape({
			id : PropTypes.number.isRequired, //kiểm tra xem chuỗi nhận về có phải number hay không
			name : PropTypes.string.isRequired ,
			image:PropTypes.string.isRequired,
			description:PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory:PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired,
	onChangeMessage : PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch,props) =>{
	return{
		onAddToCart : (product,quantity) =>{
			dispatch(actAddToCart(product,quantity));
		},
		onChangeMessage: (message) =>{
			dispatch(actChangeMessage(message));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainers);