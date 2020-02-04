import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Products from './../Components/Products';
import Product from './../Components/Product';
import {actAddToCart, actChangeMessage} from './../Actions/index';


class ProductsContainers extends Component{
    //lớp này render kết nối với store và components rồi render ra
    render() {
        let {products} = this.props;//lấy các product ở trên store mà đã được kết nối ở dưới
        return (
            <Products>
                {this.showProduct(products)} {/*chuyền dữ liệu vào theo kiểu this.props.children ở trong Products*/}
            </Products>
        );
    }
    //hàm show ra các sản phẩm có trong product ở store
    showProduct(products){
        let result = null;
        if(products.length > 0){      
            result = products.map((product,index) =>{
                return <Product
                        key={index}
                        product={product}
                        onAddToCart = {this.props.onAddToCart}
                        onChangeMessage = {this.props.onChangeMessage}
                    />
                        
            });
        }
        return result;
    }
}

//check dữ liệu nhận của ProductsContainers
ProductsContainers.propTypes = {
    products : PropTypes.arrayOf(//kiểm tra các dữ liệu trong object product 
        PropTypes.shape({
            id : PropTypes.number.isRequired, //kiểm tra xem chuỗi nhận về có phải number hay không
			name : PropTypes.string.isRequired ,
			image:PropTypes.string.isRequired,
			description:PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory:PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
}



//Nhận các dữ liệu từ store
const mapStateToProps = (state) =>{
    return{
        products : state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return{
        onAddToCart : (product)=>{
            dispatch(actAddToCart(product));
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainers);