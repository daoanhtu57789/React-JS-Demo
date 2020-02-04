import React,{Component} from 'react';

class Product extends Component{
    // constructor(props){
    //     super(props);
    //     this.onAddToCart = this.onAddToCart.bind(this);
    // }
    //tham số props để có thể lấy từ bất kì đâu nếu ko thì chỉ có thể gọi ở phần render
    //tạo constructor để onAddToCart ở dưới hoặc dùng arrow function ()=>this.onAddToCart
    // onAddToCart2 = () =>{

    // }

    
    // onAddToCart(text){
    //     alert(text);
    // } nếu không có construtor thì ko dùng đc this.props.name mà phải thông qua text để lấy

    onAddToCart = () => {
        alert(this.props.name);
    }

    render(){
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <noscript>this.props.children chuyền giá trị nằm giữa Product vào</noscript>
                    
                    <noscript>this.props.name chuyền giá trị có khoa là name ở trong Product vào</noscript>
                    <img src= {this.props.image} alt={this.props.name}/>
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>
                            {this.props.price} VNĐ
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary" onClick={this.onAddToCart}>Mua Hàng </a>
                            {/* 
                            <a href="#" className="btn btn-primary" onClick={() => this.onAddToCart(this.props.name)}>Mua Hàng </a>
                            sử dụng arrow function
                             */}
                            <noscript>Do không có tham số lên không cần ngoặc tròn ()</noscript>
                        </p>
                    </div>
                </div>
            </div>            
        );
    }
}
export default Product;