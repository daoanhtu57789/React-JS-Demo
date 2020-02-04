import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';
import {Link} from 'react-router-dom';
class ProductListPage extends Component {

    //sử dụng lifecycle
    //chạy khi hàm render chạy xong để lấy dữ liệu
    componentDidMount(){
        this.props.fetchAllProducts();
    }

    onDelete = (id) =>{
        this.props.onDeleteProduct(id);
    }

    render() {
        let {products} = this.props; 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to = "/product/add" className="btn btn-info mb-10">
                            Thêm Sản Phẩm
						</Link>
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }

    showProducts = (products) =>{
        let result = null;
        if(products.length > 0) {
            result = products.map((product,index) =>{
                return (
                    <ProductItem 
                        key = {index}
                        product = {product}
                        index = {index}
                        onDelete = {this.onDelete}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return{
        products : state.products
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return{
        fetchAllProducts : () =>{
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) =>{
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);