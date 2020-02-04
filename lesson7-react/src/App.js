import React,{Component} from 'react';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import './App.css';
import {connect} from 'react-redux';
import * as action from './actions/index';

class App extends Component{
	constructor(props){
		super(props);
	}
	onDisplay = ()=>{
		if(this.props.id === '')
		{
			this.props.onToggleForm();
		}else if(this.props.id !=='' && this.props.isDisplayForm)
		{
			this.props.onClearTask({
				id:'',
				name:'',
				status:false
			});
		}
	}
	render(){

		let {isDisplayForm} = this.props;

		return (
			<div className="container">
				<div className="text-center">
					<h1>QUẢN LÝ CÔNG VIỆC</h1>
					<hr></hr>
				</div>
				<div className="row" >
					<TaskForm  />
					<div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
						<button type="button" className="btn btn-primary" onClick={this.onDisplay}>
							<span className="fa fa-plus mr-5"></span>
							Thêm Công Việc
						</button>
						<TaskControl/>
						<TaskList />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state =>{ //state này mình lấy trên store
	return {
		isDisplayForm : state.isDisplayForm,
		id : state.itemEditing.id
	};
}

const mapDispatchToProps = (dispatch,props) =>{
	return {
		onToggleForm : ()=>{
			dispatch(action.toggleForm());
		},
		onClearTask : (task) =>{
			dispatch(action.editTask(task));
		}
		
	}
}

//kết nối để lấy dữ liệu
export default connect(mapStateToProps,mapDispatchToProps)(App);
