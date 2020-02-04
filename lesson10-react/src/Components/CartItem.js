import React, { Component } from 'react';
import * as Message from './../Constants/Messages';
class CartItem extends Component {
    render() {
        //Lấy dữ liệu item được truyền vào từ CartContainer
        let {item} = this.props;
        return (         
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {() => this.onUpdateToCart(item,-1)}
                        >
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {() => this.onUpdateToCart(item,1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.product.price*item.quantity}$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        data-original-title="Remove item"
                        onClick = {() => this.onDeleteToCart(item)}
                    >
                        X
                    </button>
                </td>
            </tr>              
        )
    }
    onDeleteToCart = (item) =>{
        this.props.onDeleteToCart(item);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateToCart = (item,value) =>{
        if(item.quantity > 0){
            this.props.onUpdateToCart(item,value);
            this.props.onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
        }
    }
}
export default CartItem;