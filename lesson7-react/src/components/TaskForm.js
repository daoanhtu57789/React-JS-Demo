import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/index';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            status: false
        }
    }
    componentWillMount(){
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id:this.props.itemEditing.id,
                
                name:this.props.itemEditing.name,
                
                status:this.props.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }

    
	componentWillReceiveProps(nextProps){

		if(nextProps && nextProps.itemEditing){
            this.setState({
                id:nextProps.itemEditing.id,
                
                name:nextProps.itemEditing.name,
                
                status:nextProps.itemEditing.status
            });
        }else if(nextProps && nextProps.itemEditing === null){
            this.setState({
                id:'',
                name :'',
                status : true
            });
        }
    }

    onCloseForm(){
        this.props.onCloseForm();
    }

    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value ==='true'? true:false; //chuyển đổi kiểu dữ liệu từ chuỗi sang boolean
        }
        this.setState({
            [name]:value
        });
    }

    onClear = () =>{
        this.setState({//không thêm id vì đây là nút để làm trắng name và status nhưng vẫn ở id đấy
            name:'',
            status:false
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);//chuyền state vào
        this.onCloseForm();
        this.onClear();
    }

	render(){
        var {itemEditing} = this.props; //lấy từ app khi truyển vào
        var {isDisplayForm} = this.props; //lấy từ mapstatetoprop
        if(!isDisplayForm){
            return '';
        }
		return (
            <div className={"col-xs-4 col-sm-4 col-md-4 col-lg-4"}>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {itemEditing.id !== ''?"Sửa Công Việc":"Thêm Công Việc"}
                            <span className="fa fa-times-circle text-right" onClick={() => this.onCloseForm()}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control" 
                                    value={this.state.name}
                                    onChange={this.onChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label>Trạng Thái</label>
                                <select 
                                    className="form-control" 
                                    name="status" 
                                    value={this.state.status}
                                    onChange={this.onChange} 
                                >
                                    <option value={true}>Kích Hoạt</option>
                            
                                    <option value={false}>Ẩn</option>
                                </select>
                            </div>
                        
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning" >
                                    <i className="fa fa-plus mr-5" ></i>
                                    Lưu Lại	
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-danger" onClick={this.onClear}>
                                    <i className="fas fa-times mr-5"></i>
                                    Hủy Bỏ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state =>{
    return {
        isDisplayForm:state.isDisplayForm,
        itemEditing : state.itemEditing  //lấy từ store
    }
}
//chuyển state thành dispatch để thực thi action
const mapDispatchToProps = (dispatch,props) =>{ 
    return {
        onSaveTask : (task) =>{
            dispatch(action.saveTask(task));
        },
        onCloseForm : ()=>{
			dispatch(action.closeForm());
        }, //do bắt sự kiện ở taskform,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
//tham số thứ 2 của connect là  action rồi dispath để thực thi  rồi đưa lên store để reducer xử lý