import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/index';

class TaskControl extends Component{
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSearch = () =>{
        this.props.onSearch(this.state.keyword); //dispatch searchTask
    }

    onSort = (sort) =>{
        this.props.onSort(sort);
    }
	render(){
        let {sort,keyword} = this.props;
		return (
            <div>
                <div className="row mt-15">				
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                value={keyword}
                                onChange={this.onChange}
                                name="keyword"
                                className="form-control" 
                                placeholder="Nhập từ khóa"
                            />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-primary" onClick={this.onSearch}>
                                    <span className="fa fa-search mr-5"></span>
                                    Tìm
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="dropdown open">
                            <button 
                                type="button" 
                                className="btn btn-primary dropdown-toggle" 
                                id="dropdownMenu1" 
                                aria-haspopup="true" 
                                aria-expanded="false" 
                                data-toggle="dropdown"
                            >
                                Sắp Xếp
                                <span className="fa fa-caret-square-down ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <a
                                        role="button" 
                                        onClick={() => this.onSort({
                                            name:'name',
                                            status: 1
                                        })}   
                                    >
                                        <span className="fa fa-sort-alpha-down pr-5">
                                            Tên A-Z
                                            <span className={(sort.name ==="name" && sort.status === 1)?"fas fa-check":""}></span>
                                        </span>
                                    </a>
                                </li>
                                <li >
                                    <a 
                                        role="button" 
                                        onClick={() => this.onSort({
                                            name:'name',
                                            status:-1
                                        })}
                                    >
                                        <span className="fa fa-sort-alpha-down-alt pr-5">
                                            Tên Z-A
                                            <span className={(sort.name ==="name" && sort.status === -1)?"fas fa-check":""}></span>
                                        </span>
                                    </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li >
                                    <a 
                                        role="button" 
                                        onClick={() => this.onSort({
                                            name:'status',
                                            status:1
                                        })}    
                                    >
                                        Trạng Thái Kích Hoạt
                                        <span className={(sort.name ==="status" && sort.status === 1)?"fas fa-check":""}></span>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a 
                                        role="button" 
                                        onClick={() => this.onSort({
                                            name:'status',
                                            status:-1
                                        })}
                                    >
                                        Trạng Thái Ẩn
                                        <span className={(sort.name ==="status" && sort.status === -1)?"fas fa-check":""}></span>
                                     </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
const mapStateToProps = state =>{ //state này mình lấy trên store
	return {
        keyword:state.keyword,
        sort:state.sort
	};
}

const mapDispatchToProps = (dispatch,props) =>{
	return {
        onSearch : (keyword) =>{
            dispatch(action.searchTask(keyword));
        },
        onSort : (sort) =>{
            dispatch(action.sortTask(sort));
        }
	}
}
//kết nối để lấy dữ liệu
export default connect(mapStateToProps,mapDispatchToProps)(TaskControl);
