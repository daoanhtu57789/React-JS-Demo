import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Product from './component/Product';
class App extends Component{
	
	constructor(props){
		super(props);
		//this.onAddProduct = this.onAddProduct.bind(this);
		this.onSetState = this.onSetState.bind(this);
		//sử dụng errow function ở dưới thì bỏ dòng này
		this.state = {
			//giờ có thể sử dụng this.state.product1 ở khắp nơi và chỉ có thể sử dụng ở constructor
			product1 : [
				{
					id:1,
					name:"Iphon11",
					price:"29.000.000",
					image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
					status:true
				},
				{
					id:2,
					name:"Galaxy S9",
					price:"12.000.000",
					image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
					status:false
				},
				{
					id:3,
					name:"Xiaomi pro6",
					price:"10.000.000",
					image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
					status:true
				},
				{
					id:4,
					name:"Oppo A30",
					price:"12.000.000",
					image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
					status:true				
				},
				{
					id:5,
					name:"Oppo A50",
					price:"16.000.000",
					image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
					status:true
				}	
			],
			isActive:true
		}
	}
    onAddProduct = () => {
		console.log(this.refs.name.value);
		//lấy dữ liệu có ref là name
	}
	
	onSetState = () =>
	{
		if(this.state.isActive === true){
			this.setState({//đặt lại nội dung bằng this.setSate,để dùng this phải khai báo
				isActive : false
			});
		}
		else{
			this.setState({
				isActive : true
			});
			
		}
	}


	render(){
		
		// var products =[ 
		// 	{
		// 		id:1,
		// 		name:"Iphon11",
		// 		price:"29.000.000",
		// 		image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
		// 		status:true
		// 	},
		// 	{
		// 		id:2,
		// 		name:"Galaxy S9",
		// 		price:"12.000.000",
		// 		image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
		// 		status:false
		// 	},
		// 	{
		// 		id:3,
		// 		name:"Xiaomi pro6",
		// 		price:"10.000.000",
		// 		image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
		// 		status:true
		// 	},
		// 	{
		// 		id:4,
		// 		name:"Oppo A30",
		// 		price:"12.000.000",
		// 		image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
		// 		status:true				
		// 	},
		// 	{
		// 		id:5,
		// 		name:"Oppo A50",
		// 		price:"16.000.000",
		// 		image:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763",
		// 		status:true
		// 	}
		// ];
		//sử dụng đc this.state.product1
		let element = this.state.product1.map((product,index) =>{
			if(product.status)
				return(
					<Product
						key = {product.id}
						name = {product.name} 
						price={product.price}
						image={product.image}
					></Product> 
				);
			else
				return;
			}
		)

		let element1 = this.state.product1.map((product,index) =>{
			if(product.status)
				return(
					<tr key={index}>
					<td>{product.id}</td>
					
					<td>{product.name}</td>
					
					<td>
						<span className="label label-success">{product.price} VNĐ</span>
					</td>
				</tr> 
				);
			else
			return;
			}
		)
		return (
			<div>
				<Header /> <noscript>Chèn Header tắt vào thay cho chèn Header thông thường</noscript>
				<div className="container">
					<div className="row">
						<div className="row">
							
{/*========================================State============================================================================= */}
							
							<table className="table table-bordered table-hover">
								<thead>
									<tr>
										<th>STT</th>
										
										<th>Tên Sản Phẩm</th>
										
										<th>Giá</th>
									</tr>
								</thead>
								<tbody>
									{this.state.isActive === true?element1 : ""}
								</tbody>
							</table>
							<button type="button" className="btn btn-warning" onClick= {this.onSetState}>
								Active : {this.state.isActive === true ? 'true' : 'false' }
							</button>

{/*=================================================refs lấy giá trị==================================================================== */}
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								
								<div className="panel panel-danger">
									<div className="panel-heading">
										<h3 className="panel-title">Tên Sản Phẩm</h3>
									</div>
									<div className="panel-body">
										<div className="form-group">
											<label>Tên Sản Phẩm</label>
											<input type="text" className="form-control" id="" placeholder="Input field" ref="name" />	
										</div>
										<button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>
											Lưu
										</button>
									</div>
								</div>
								
							</div>
							
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								{/* cach1 <Product
									name = {product.name} 
									price={product.price}
									image={product.image}
									
								></Product> */}
								
								{/* {products.map((product,index) =>{
											return(
												<Product
													key={product.id}
													name = {product.name} 
													price={product.price}
													image={product.image}
												></Product> 
											);
										}
									)
								} */}

								{element}

							</div>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}
export default App;
