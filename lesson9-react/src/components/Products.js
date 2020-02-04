import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';
import Product from './Product';

class Products extends Component {

	render() {
		var products = [
			{
				id: 1,
				slug:'iphone',
				name: 'Iphone X',
				price: 25000000
			}, {
				id: 2,
				slug:'samsung',
				name: 'SamSung note 9',
				price: 21000000
			},
			{
				id: 3,
				slug:'xiaomi',
				name: 'xiaomi note 4 pro',
				price: 25000000
			}
		];

		let {match,location} = this.props;
		// match lấy các thông số hiện tại của trang web
		let url =match.url;
		var result = products.map((product, index) => {
			return (
				// to={`${url}/${product.slug}`} chuyển lên Route	
				<NavLink to={`${url}/${product.slug}`} key={index} >
					<li className="list-group-item">
						{product.id} - {product.name} - {product.price}
					</li>
				</NavLink>
			)
		})
		return (
			<div className="container">
				<h1>Đây là trang sản phẩm</h1>
				<div className="row">
					<ul className="list-group">
						{result}
					</ul>
				</div>

				<div className="row">
					<Route path = "/products/:slug" component={Product}></Route>
				</div>
				

			</div>
		);
	}
}
export default Products;
