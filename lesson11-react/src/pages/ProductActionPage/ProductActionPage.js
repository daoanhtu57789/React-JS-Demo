import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from '../../actions';

class ProductActionPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			txtName: '',
			txtPrice: '',
			chkbStatus: ''
		}
	}

	componentDidMount() {
		let { match } = this.props;
		if (match) {
			let id = match.params.id;
			// callApi(`products/${id}`, 'GET', null).then(res => {
			// 	this.setState({
			// 		id: res.data.id,
			// 		txtName: res.data.name,
			// 		txtPrice: res.data.price,
			// 		chkbStatus: res.data.status
			// 	});
			// })
			this.props.onEditProduct(id);
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.itemEditting){
			let {itemEditting} = nextProps;
			this.setState({
				id : itemEditting.id,
				txtName : itemEditting.name,
				txtPrice : itemEditting.price,
				chkbStatus : itemEditting.status
			});
		}
	}

	onChange = (e) => {

		let target = e.target;
		let name = target.name;
		let value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({
			[name]: value
		});

	}

	onSave = (e) => {
		let { id, txtName, txtPrice, chkbStatus } = this.state;
		let { history } = this.props;
		let product = {
			id:id,
			name : txtName,
			price : txtPrice,
			status : chkbStatus
		}
		e.preventDefault();
		if (id) { //trường hợp update
			//http://localhost:3000/products/:id => http method : PUT
			// callApi(`products/${id}`,'PUT',{
			// 	name : txtName,
			// 	price : txtPrice,
			// 	status :chkbStatus
			// }).then(res => {
			// 	history.goBack();
			// });
			this.props.onUpdateProduct(product);
			history.goBack();
		}
		else {
			// callApi('products', 'POST', {
			// 	name: txtName,
			// 	price: txtPrice,
			// 	status: chkbStatus
			// }).then(res => {
			// 	history.goBack();//quay trở lại trang trước đó,tìm hiểu các hàm hỗ trợ history ở reacttraning
			// 	//hoặc history.push("/"); để chuyển về trang chủ
			// });
			this.props.onSaveProduct(product);
			history.goBack();
		}
	}

	render() {
		let { txtName, txtPrice, chkbStatus } = this.state;
		
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form onSubmit={this.onSave}>
					<div className="form-group">
						<label >Tên Sản Phẩm: </label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							value={ txtName }
							onChange={this.onChange}
						/>
					</div>

					<div className="form-group">
						<label> Giá: </label>
						<input
							type="number"
							className="form-control"
							name="txtPrice"
							value={ txtPrice }
							onChange={this.onChange}
						/>
					</div>

					<div className="form-group">
						<label> Trạng Thái : </label>
					</div>
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								name="chkbStatus"
								value={ chkbStatus }
								onChange={this.onChange}
								checked={ chkbStatus }//kiểm tra checked có thì đánh dấu tích
							/>
							Còn Hàng
						</label>
					</div>
					<button type="submit" className="btn btn-primary mr-10">Lưu Lại</button>
					<Link to='/product-list' className="btn btn-danger">
						Trở Lại
					</Link>
				</form>

			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return{
		itemEditting : state.itemEditting
	}
}

const mapDispatchToProps = (dispatch,props) =>{
	return {
		onSaveProduct : (product) =>{
			dispatch(actAddProductRequest(product));
		},
		onEditProduct : (id) =>{
			dispatch(actEditProductRequest(id));
		},
		onUpdateProduct : (product) =>{
			dispatch(actUpdateProductRequest(product));
		}
	}
} 

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
