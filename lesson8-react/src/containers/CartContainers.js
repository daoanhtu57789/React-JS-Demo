import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import  {actDeleteProductToCart,actChangeMessage,actUpdateProductToCart,actCompleteProductToCart} from './../actions/index';
class CartContainers extends Component {
	render() {
		var {cart} = this.props;
		return (
			<Cart>
				{this.showCartItem(cart)}
				{this.showTotalAmount(cart)}
			</Cart>
		);
	}

	showCartItem = (cart)=>{
		var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
		if(cart.length > 0){
			result = cart.map((item,index) => {
				return <CartItem 
					key={index}
					item={item}
					index={index} 
					onDeleteProductInCart = {this.props.onDeleteProductInCart}
					onChangeMessage = {this.props.onChangeMessage}
					onUpdateProductToCart = {this.props.onUpdateProductToCart}
				/>
			})
		}
		return result;
	}



	showTotalAmount = (cart)=>{
		let result = null;
		if(cart.length > 0){
			result = <CartResult 
						cart={cart} 
						onChangeMessage = {this.props.onChangeMessage} 
						onCompleteProductToCart = {this.props.onCompleteProductToCart}
					/>
		}
		return result;
	}

}
//isrequired bắt buộc phải có
CartContainers.propTypes = {
	cart : PropTypes.arrayOf(PropTypes.shape({
		product:PropTypes.shape({
			id : PropTypes.number.isRequired, //kiểm tra xem chuỗi nhận về có phải number hay không
			name : PropTypes.string.isRequired ,
			image:PropTypes.string.isRequired,
			description:PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory:PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		}).isRequired,
		quantity : PropTypes.number.isRequired
	})).isRequired,
	onDeleteProductInCart : PropTypes.func.isRequired,
	onChangeMessage : PropTypes.func.isRequired,
	onUpdateProductToCart : PropTypes.func.isRequired
}

const mapStateToProps = state =>{
	return {
		cart : state.cart
	}
}

const mapDispatchToProps = (dispatch,props) =>{
	return{
		onDeleteProductInCart :(product) =>{
			dispatch(actDeleteProductToCart(product));
		},
		onChangeMessage: (message) =>{
			dispatch(actChangeMessage(message));
		},
		onUpdateProductToCart : (product,quantity)=>{
			dispatch(actUpdateProductToCart(product,quantity));
		},
		onCompleteProductToCart : ()=>{
			dispatch(actCompleteProductToCart());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainers);