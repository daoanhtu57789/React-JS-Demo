import React,{Component} from 'react';
import './App.css';
import TaskControl from './components/TaskControl';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
//import _ from 'lodash';
//cần dùng hàm nào thì import hàm đấy sẽ nhẹ hơn khi import cả thư viện lodash
import { findIndex } from 'lodash';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			tasks:[], //id,unique,name,status
			isDisplayForm : false,
			taskEditing:false,
			filter:{
				name:'',
				status:-1
			},
			keyWord:'',
			sortBy:'name',
			sortStatus:1
		}

		//cách1  this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount(){ //cập nhật state khi mở form 
		if(localStorage && localStorage.getItem('tasks')){
			var task = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks : task
			});
		}
	}

	s4(){
		return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
		//hàm ramdom chuỗi
	}

	generateID(){
		return this.s4()+this.s4()+'_'+this.s4()+'_'+this.s4()+this.s4()+'_'+this.s4()+'_'+'_'+this.s4()+this.s4()+'_'+this.s4()+this.s4()+this.s4();
		//tạo ra chuỗi string khác nhau càng phức tạp càng khó trùng
	}
	onDisplay = () => {
		if(this.state.isDisplayForm && this.state.taskEditing !== null){
			this.setState({
				taskEditing:null, //bấm vào để sửa thành đóng
				isDisplayForm:true 
			});
		}else{
			this.setState({
				taskEditing:null, //bấm vào để sửa thành đóng
				isDisplayForm:!this.state.isDisplayForm //kích để đóng mở taskform
			});
		}
	}

	onCloseForm = () =>{
		this.setState({
			isDisplayForm : false,

		});
	}

	onShowForm = ()=>{
		this.setState({
			isDisplayForm : true
		});
	}
	//casch2 dùng arrow function
	onSubmit = (data) => {
		var {tasks} = this.state;
		if(data.id ===''){
			data.id = this.generateID();
			tasks.push(data);	
		}else{
			//var index = this.findIndex(data.id);
			var index =findIndex((tasks),(task)=>{return task.id === data.id });
			tasks[index] = data;
		}

		this.setState({
			tasks : tasks,
			taskEditing:null
		});

		localStorage.setItem("tasks",JSON.stringify(tasks));

	}

	onUpdateStatus = (data) =>{
		
		var {tasks} = this.state;
		var index =findIndex((tasks),(task)=>{return task.id === data });//dùng thư viện lodash
		//var index = this.findIndex(data);
		if(index !== -1){
			tasks[index].status = !tasks[index].status;
			this.setState({
				tasks:tasks
			});
		}
		localStorage.setItem("tasks",JSON.stringify(tasks)); //lưu lại sau khi refesh
	}
	
	onDelete = (id) =>{
		var {tasks} = this.state;
		var index =findIndex((tasks),(task)=>{return task.id === id });
		//var index = this.findIndex(id);
		if(index !== -1){
			tasks.splice(index,1);//xóa 1 phần tử từ vị trí index
			this.setState({
				tasks:tasks
			});
		}
		this.onCloseForm();
		localStorage.setItem("tasks",JSON.stringify(tasks)); //lưu lại sau khi refesh
	}

	onUpdate = (id) =>{
		var {tasks} = this.state;
		//var index =this.findIndex(id);
		var index =findIndex((tasks),(task)=>{return task.id === id });
		let taskEditing = tasks[index];
		this.setState({
			taskEditing : taskEditing
		});
		this.onShowForm();
		
	}

	// findIndex = (data) =>{
	// 	var {tasks} = this.state;
	// 	var resault = -1;
	// 	tasks.forEach((task , index) => {
	// 		if(task.id === data){
	// 			resault = index;
	// 		}
	// 	});
	// 	return resault ;
	// }

	onFilter = (filterName,filterStatus)=>{
		filterStatus = +filterStatus; //chuyển về kiểu number hoặc có thể dùng parseInt
		this.setState({
			filter:{
				name:filterName.toLowerCase(),//chuyển sang chữ thưởng để tím kiếm
				status:filterStatus
			}
		})
	}

	onSearch = (keyWord)=>{
		this.setState({
			keyWord : keyWord
		});
	}

	onSort = (sortBy,sortStatus)=>{
		this.setState({
			sortBy:sortBy,
			sortStatus:sortStatus
		})
	}

	render(){
		var {tasks,isDisplayForm,taskEditing,filter,keyWord,sortBy,sortStatus} = this.state; //tương đương tasks = this.state.tasks isDisplayForm = this.state.isDisplayForm 
		if(filter){
			if(filter.name){ //hiện các giá trị trong bảng tương đương với nội dung nhập
				tasks = tasks.filter((task) =>{
					return task.name.toLowerCase().indexOf(filter.name) !== -1; //tìm kiếm xem có filter.name trong tasks ko
				});
			}
			//do lúc nào cũng có giá trị ở mục chọn nên ko cần if như ở tìm name
			tasks = tasks.filter((task) =>{
				if(filter.status ===  -1){
					return task;
				}
				else{
					return task.status === (filter.status === 1 ? true : false);
				}
			});

			tasks = tasks.filter((task) =>{
				return task.name.toLowerCase().indexOf(keyWord) !== -1; //tìm kiếm xem có filter.name trong tasks ko
			});

		}
		if(sortBy==='name'){
			tasks.sort((a,b)=>{
				if(a.name>b.name){
					return sortStatus
				}if(a.name<b.name){
					return -sortStatus
				}else{
					return 0;
				}
			});	
		}else{
			tasks.sort((a,b)=>{
				if(a.status>b.status){
					return -sortStatus
				}if(a.status<b.status){
					return sortStatus
				}else{
					return 0;
				}
			});	
		}
		var elmTaskForm = isDisplayForm 
			? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} task = {taskEditing}/> : ''; //xử lý đóng mở các task nhập liệu
		
		return(	
			<div className="container">
				<div className="text-center">
					<h1>Quản Lý Công Việc</h1>
					<hr></hr>
				</div>
				<div className="row">
					<div className={isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}> {/*để trống hoặc col-xs-0 col-sm-0 col-md-0 col-lg-0 */}
						{elmTaskForm}
					</div>
					<div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
						<button type="button" className="btn btn-primary" onClick={this.onDisplay}>		
							<span className="fa fa-plus mr-5">
								Thêm Công Việc
							</span>
						</button>
						<TaskControl 
							onSearch={this.onSearch}
							onSort={this.onSort}
							sortBy={sortBy}
							sortStatus={sortStatus}	
						/>
						<TaskList 
							tasks = {tasks} 
							onUpdateStatus={this.onUpdateStatus} 
							onDelete={this.onDelete} 
							onUpdate = {this.onUpdate}
							onFilter = {this.onFilter}
						/>
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;
