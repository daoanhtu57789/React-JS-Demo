import React,{Component} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as action from './../actions/index'
class TaskList extends Component{
    constructor(props){
        super(props);
        this.state={
            filterName:'',
            filterStatus: -1 //all -1,active 1 ,diacvice 0
        }
    }


    onChange = (event)=>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let filter = {
            name: name === 'filterName' ? value:this.state.filterName,
            status: name === 'filterStatus' ? value:this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]:value
        });
        
    }
	render(){

        let {tasks,filterTable,keyword,sort} = this.props;       
        if(filterTable.name){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf( //kiểm tra xem filter name có trong danh sách name của tasks ko
                    filterTable.name.toLowerCase()) !== -1
            });
        }
        tasks = tasks.filter((task)=>{
            if(filterTable.status === -1){
                return tasks
            }else{
                return task.status === (filterTable.status === 1 ? true : false);
            }
        });

        tasks = tasks.filter((task)=>{
            return task.name.toLowerCase().indexOf( //kiểm tra xem keyword có trong danh sách name của tasks ko
                keyword.toLowerCase()) !== -1
        });

        if(sort.name==='name'){
            tasks.sort((a,b)=>{
                if(a.name>b.name){
                    return sort.status
                }if(a.name<b.name){
                    return -sort.status
                }else{
                    return 0;
                }
            });	
        }else{
            tasks.sort((a,b)=>{
                if(a.status>b.status){
                    return -sort.status
                }if(a.status<b.status){
                    return sort.status
                }else{
                    return 0;
                }
            });	
        }


        let elmItem = tasks.map((task,index) =>{
        
            return <TaskItem 
                    key={task.id}
                    index={index} 
                    task={task}
            />
        });
		return (
            <div>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input 
                                            name="filterName" 
                                            type="text" 
                                            className="form-control"    
                                            value ={filterTable.name}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                    <td>
                                        <select 
                                            name="filterStatus" 
                                            className="form-control" 
                                            value = {filterTable.status}
                                            onChange = {this.onChange}
                                        >
                                            <option value={-1}>Tất Cả</option>
                                            <option value={0}>Ẩn</option>
                                            <option value={1}>Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {elmItem}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = (state) =>{//lên store lấy về state
    return {
        tasks : state.tasks,
        filterTable : state.filterTable,
        keyword : state.search,
        sort : state.sort
    }
}

const mapDispatchToProps = (dispatch,props) =>{
	return {
		onFilterTable : (filter)=>{
            dispatch(action.filterTask(filter));
        }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
