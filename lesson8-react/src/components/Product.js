import React, { Component } from 'react';
import * as Message from './../constants/Message';

class Product extends Component {
	constructor(props){
		super(props);
		this.state={
			quantity : '' 
		}
	}

	onChange = (event) =>{
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: +value
		})
	}


	
	render() {
		let {product} = this.props;
		let {quantity} = this.state;
		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img src={product.image} className="img-fluid" alt={product.name} />
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
							<span>
								<span className="left">{product.price}$</span>	
								<input type="text" name="quantity" value={this.state.quantity} onChange={this.onChange} className="form-control" placeholder="Số Lượng" />
							</span>

							<span className="right">
								<a 
									className="btn-floating blue-gradient" 
									data-toggle="tooltip" 
									data-placement="top" 
									data-original-title="Add to Cart"
									onClick={() => this.onAddToCart(product,quantity)}
								>
									<i className="fa fa-shopping-cart" />
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
	showRatings = (rating)=>{
		let result = [];
		if(rating>0){
			for(let i=1;i<=rating;i++){
				result.push(<i key={i} className="fa fa-star" />);
			}
			for(let i = rating+1;i<=5;i++){
				result.push(<i key={i} className="fa fa-star-o" />);
			}
		}
		return(
			result	
		);
	}

	onAddToCart = (product,quantity) =>{
		this.props.onAddToCart(product,quantity);
		this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
	}
}

export default Product;
