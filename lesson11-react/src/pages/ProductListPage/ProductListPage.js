import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
//import callAPI from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actFetchProductsRequest,actDeleteProductsRequest} from './../../actions/index';
class ProductListPage extends Component {

	//sử dụng lifecycle
	//gọi sau khi component render lần đầu tiên
	componentDidMount() {
		// axios({
		// 	method: 'GET',
		// 	url: 'http://localhost:3000/products',
		// 	data: null,

		// }).then(res => {
		// 	//products = res.data;//dùng thế này thì server mất nhiều tg hơn render => render sẽ hiển thị trước => bất đồng bộ
		// 	this.setState({
		// 		products : res.data
		// 	})
		// }).catch(err => {
		// 	console.log(err);
		// });
		// callAPI('products','GET',null).then(res =>{
		// 	// this.setState({
		// 	// 	products : res.data
		// 	// });
		// 	this.props.fetchAllProducts(res.data);
		// });
		this.props.fetchAllProducts();
	}

	onDelete = (id) =>{
		//let {products} = this.state;
		// callAPI(`products/${id}`,'DELETE',null).then(res =>{
		// 	if(res.status === 200){//OK
		// 		let index = this.findIndex(products,id);
		// 		if(index !== -1){
		// 			products.splice(index,1);
		// 			this.setState({
		// 				products : products
		// 			});
		// 		}

		// 	}
		// });
		this.props.onDeleteProduct(id);
	}

	// findIndex = (products,id) =>{
	// 	let result = -1;
	// 	if(products.length > 0){
	// 		products.forEach((product,index) => {
	// 			if(product.id === id){
	// 				result = index;
	// 				return result;
	// 			}
	// 		});
	// 	}
	// 	return result;
	// }

	render() {
		let {products} = this.props;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="product/add" className="btn btn-info mb-10">
					Thêm Sản Phẩm
				</Link>
				<ProductList>
					{this.showProducts(products)}
				</ProductList>
			</div>
		);
	}

	showProducts = (products) => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<ProductItem
						key={index}
						product={product}
						index={index}
						onDelete = {this.onDelete}
					/>
				);
			});
		}
		return result;
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products,//state.products vì lấy products ở combineReducers
	}
}

const mapDispatchToProps = (dispatch,props) =>{
	return{
		fetchAllProducts : () =>{
			dispatch(actFetchProductsRequest());
		},
		onDeleteProduct : (id) =>{
			dispatch(actDeleteProductsRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
