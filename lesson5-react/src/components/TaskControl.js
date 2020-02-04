import React,{Component} from 'react';

class TaskControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyWord : ''
        }
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });

    }
    onSearch = ()=>{
        this.props.onSearch(this.state.keyWord);//truyền keyWord ra ngoài
    }
    onSort(sortBy,sortValue){
        this.props.onSort(sortBy,sortValue);
    }
	render(){
        var {keyWord} = this.state;
        var {sort} = this.state;
		return(
            <div>
                <div className="row mt-15">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputAmount" 
                                name="keyWord"
                                placeholder="Nhập Từ Khóa"
                                value={keyWord}
                                onChange={this.onChange}
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
                        <div className = "dropdown open">
                             <button 
                                type="button" 
                                className="btn btn-primary dropdown-toggle" 
                                id="dropdownMenu1" 
                                aria-haspopup="true"
                                aria-expanded="true"
                                data-toggle="dropdown"
                            >
                                Sắp Xếp
                                <span className="fa fa-caret-square-down ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li onClick={() => this.onSort('name',1) }>
                                    <a 
                                        role="button" 
                                        className={(this.props.sortBy === 'name' && this.props.sortStatus === 1)?"sort_selected":''}
                                    >
                                        <span className="fa fa-sort-alpha-down pr-5" >
                                            Tên A-Z
                                        </span>
                                    </a>
                                </li>
                                <li onClick={() => this.onSort('name',-1)}>
                                    <a 
                                        role="button" 
                                        className={(this.props.sortBy === 'name' && this.props.sortStatus === -1)?"sort_selected":''} 
                                    >   
                                        <span className="fa fa-sort-alpha-down-alt pr-5" >
                                            Tên Z-A
                                        </span>
                                    </a>
                                </li>
                                <li role="separator" className = "divider"></li>
                                <li onClick={() => this.onSort('status',1)}>
                                    <a 
                                        role="button" 
                                        className={(this.props.sortBy === 'status' && this.props.sortStatus === 1)?"sort_selected":''}
                                    >
                                        Trạng Thái Kích Hoạt
                                    </a>
                                </li>
                                <li onClick={() => this.onSort('status',-1)}>
                                    <a 
                                        role="button" 
                                        className={(this.props.sortBy === 'status' && this.props.sortStatus === -1)?"sort_selected":''}
                                    >
                                        Trạng Thái Ẩn
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
export default TaskControl;
