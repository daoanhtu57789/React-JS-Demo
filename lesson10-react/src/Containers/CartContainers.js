import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../Components/Cart';
import CartItem from './../Components/CartItem';
import * as Message from './../Constants/Messages'
import CartResult from '../Components/CartResult';
import {actDeleteToCart, actChangeMessage, actUpdateToCart} from './../Actions/index';

class CartContainers extends Component{
    //lớp này render kết nối với store và components rồi render ra
    render() {
        let {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartTotalAmount(cart)}
            </Cart>
        );
    }
    //hiển thị thông tin các món hàng trong giỏ hàng
    showCartItem = (cart) =>{
        let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr> //nếu rỗng thì trả về dòng chữ 
        if(cart.length > 0){
            result = cart.map((item,index)=>{
                return(
                    <CartItem 
                        key={index}
                        item={item}   
                        index={index}   
                        //action bấm nút X
                        onDeleteToCart = {this.props.onDeleteToCart}
                        //action hiển thị message ứng với các tác vụ vừa xảy ra
                        onChangeMessage = {this.props.onChangeMessage}
                        //action bấm nút + hoặc -
                        onUpdateToCart ={this.props.onUpdateToCart}
                    />
                );
            })
        }
        return result;
    }
    //Hiển thị tổng tiền trong giỏ hàng
    showCartTotalAmount = (cart) =>{
        let result = null;
		if(cart.length > 0){
			result = <CartResult 
						cart={cart} 
						// onChangeMessage = {this.props.onChangeMessage} 
						// onCompleteProductToCart = {this.props.onCompleteProductToCart}
					/>
		}
		return result;
    }
}

//check dữ liệu nhận của ProductsContainers
CartContainers.propTypes ={
    cart : PropTypes.arrayOf(PropTypes.shape({//kiểm tra các dữ liệu trong object product 
        product : PropTypes.shape({
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
    onChangeMessage : PropTypes.func.isRequired,
    onDeleteToCart : PropTypes.func.isRequired
}

//Lấy thông tin giỏ hàng từ store
const mapStateToProps = (state) =>{
    return{
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        onDeleteToCart : (cart)=>{
            dispatch(actDeleteToCart(cart));
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        },
        onUpdateToCart : (cart,value) =>{
            dispatch(actUpdateToCart(cart,value));
        }
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainers);