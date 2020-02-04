import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartResult extends Component {
	render() {
		let {cart} = this.props;
		return (
			<tr>
				<td colSpan={3} />
				<td>
					<h4>
						<strong>Tổng Tiền</strong>
					</h4>
				</td>
				<td>
					<h4>
						<strong>{this.showTotalAmount(cart)}$</strong>
					</h4>
				</td>
				<td colSpan={3}>
					<button 
						type="button"  
						className="btn btn-primary waves-effect waves-light"
						onClick={this.onCompleteProductToCart}
					>
						Complete purchase
						<i className="fa fa-angle-right right" />
					</button>
				</td>
			</tr>
		);
	}

	showTotalAmount = (cart) => {
		let total = 0;
		if(cart.length > 0){
			for(let i=0;i<cart.length;i++){
				total += cart[i].product.price * cart[i].quantity;
			}
		}
		return total;
	}	

	onCompleteProductToCart = () =>{
		let {cart} = this.props;
		alert("Bạn Đã Thanh Toán "+this.showTotalAmount(cart)+"$ Thành Công");
		this.props.onCompleteProductToCart();
		this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
	}
	
}

export default CartResult;
