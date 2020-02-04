import React, { Component } from 'react';

class Product extends Component {

	render() {
		let {match} = this.props;
		let name = match.params.slug;
		return (
			<div className="container">
				<h1>Chi tiết sản phẩm của : {name}</h1>
			</div>
		);
	}
}
export default Product;
