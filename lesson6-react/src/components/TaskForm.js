import React,{Component} from 'react';

class TaskForm extends Component{
    constructor(props){
        super(props);
        //this.onCloseForm = this.onCloseForm.bind(this); cách 1 để truyền dữ liệu nếu dùng cái này thì ko cần arow function 
        //sự kiện trong thẻ span
        this.state = {
            id:'',
            name :'',
            status : true,

        }
    }

    componentWillMount(){
        if(this.props.task){
            this.setState({
                id:this.props.task.id,
                
                name:this.props.task.name,
                
                status:this.props.task.status
            });
        }
    }

    
	componentWillReceiveProps(nextProps){
		if(nextProps && nextProps.task){
            this.setState({
                id:nextProps.task.id,
                
                name:nextProps.task.name,
                
                status:nextProps.task.status
            });
        }else if(nextProps && nextProps.task === null){
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

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value ==='true'?true:false; //chuyển đổi kiểu dữ liệu từ chuỗi sang boolean
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault(); // ngăn ko cho trang refesh lại vì khi bấm button kiểu là submit thì trang sẽ tự động load lại
        this.props.onSubmit(this.state);
        this.onCloseForm();
        this.onClear();

    }

    onClear = () =>{
        this.setState({
            name:'',
            status : true
        });
    }



	render(){
        var {id} = this.state;
		return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !=='' ? 'Sửa Công Việc':'Thêm Công Việc'}
                        <span className="fa fa-times-circle text-right" onClick={() => this.onCloseForm()}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label >Tên:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value = {this.state.name}
                                onChange = {this.onChange}
                            />
                        </div>
                        <label>Trạng Thái</label>
                        
                        <select 
                            className="form-control"
                            name="status" 
                            value = {this.state.status}
                            onChange = {this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            
                            <option value={false}>Ẩn</option>
                        </select>
                        
                        <br></br>

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
		);
	}
}

export default TaskForm;
