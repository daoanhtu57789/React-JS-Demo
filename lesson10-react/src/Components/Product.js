import React, { Component } from 'react';
import * as Message from './../Constants/Messages'; 
class Product extends Component {
    //viết func xử lý đánh giá sao của product
    showRatings = (rating)=>{
        let resual = [];
        if(rating>0){
            for(let i=0;i<rating;i++){
                resual.push(<i key={i} className="fa fa-star" />)//đẩy ký hiệu sao đặc vào
            }
            for(let i=rating;i<5;i++){
                resual.push(<i key={i} className="fa fa-star-o" />) //đẩy ký hiệu sao rỗng vào
            }
        }
        return resual;
    }
    //func xử lý khi click vào nút giỏ hà
    onAddToCart = (product) =>{
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    render() {
        let {product} = this.props; 
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRatings(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" 
                                    data-original-title="Add to Cart"
                                    onClick={() => this.onAddToCart(product)} 
                                >
                                    <i className="fa fa-shopping-cart"/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;