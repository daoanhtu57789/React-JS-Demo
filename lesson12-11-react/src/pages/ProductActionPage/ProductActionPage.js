import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { actAddProductRequest, actUpdateProductRequest, actEditProductRequest } from '../../actions/index';
class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            txtName : '',
            txtPrice : '',
            chkbStatus : ''
        }
    }

    //dùng lifecycle để load lại dữ liệu trong form
    componentDidMount(){
        //match chuyền vào từ routes
        let {match} = this.props;
        if(match){
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.itemEditing){
            let {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkbStatus : itemEditing.status
            });
        }
    }

    onChange = (e) =>{
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })   
    }

    onSave = (e) =>{
        
        let {id,txtName,txtPrice,chkbStatus} = this.state;
        let {history} = this.props;
        let product = {
			id:id,
			name : txtName,
			price : txtPrice,
			status : chkbStatus
        }
        e.preventDefault();
        if(id){
            this.props.onUpdateProduct(product);
            history.goBack();
        }else{
            this.props.onSaveProduct(product);
            history.goBack();
        }
    }

    render() {
        let {txtName,txtPrice,chkbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name = "txtName"
                            value={ txtName }
                            onChange = {this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Giá Sản Phẩm ($): </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name = "txtPrice"
                            value = { txtPrice }
                            onChange = {this.onChange}
                        />
                    </div>

                    <div className="checkbox">
                        <label>
                            <input 
                                type = "checkbox" 
                                value = { chkbStatus }
                                name = "chkbStatus"
                                checked = { chkbStatus } 
                                onChange = {this.onChange}
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
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return{
        onSaveProduct : (product) =>{
            return(
                dispatch(actAddProductRequest(product))
            );
        },
        onUpdateProduct : (product) =>{
            return(
                dispatch(actUpdateProductRequest(product))
            );
        },
        onEditProduct : (id) =>{
            return(
                dispatch(actEditProductRequest(id))
            );
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);