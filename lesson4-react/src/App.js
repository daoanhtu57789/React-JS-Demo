import React,{Component} from 'react';

import './App.css';

class App extends Component{

	constructor(props){
		super(props);
		this.state={
			txtName:'',
			txtPassword:'',
			txtDesc:'',
			sltGender: 0,
			rdLang : "vi",
			chkbstatus: false
		}
		this.onHandleChange = this.onHandleChange.bind(this);
		
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onHandleChange(event){
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value

		this.setState({
			[name]:value
		})
	}

	onHandleSubmit(event){
		event.preventDefault();
		console.log(this.state);
	}

	render(){
		return(
			<div className="container mt-30">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						
						<div className="panel panel-primary">
							  <div className="panel-heading">
									<h3 className="panel-title">From</h3> 
							  </div>
							  <div className="panel-body">
									<form onSubmit={this.onHandleSubmit}>									
										<div className="form-group">
											<label>UserName:</label>
											<input 
												type="text" 
												className="form-control"  
												name="txtName"
												value={this.state.txtName}
												onChange={this.onHandleChange}
											/>
										</div>

										<div className="form-group">
											<label>PassWord:</label>
											<input 
												type="password" 
												className="form-control" 
												name="txtPassword"
												value={this.state.txtPassword}
												onChange={this.onHandleChange}
											/>
										</div>

										<div className="form-group">
											<label>Mô Tả:</label>
											<textarea
												className="form-control"
												rows = "3"
												value={this.state.txtDesc}
												name="txtDesc"
												onChange={this.onHandleChange}
											></textarea>
										</div>

										<label>Giới Tính</label>
										<select 
											className="form-control" 
											name="sltGender" 
											value={this.state.sltGender} //lấy dữ liệu chuyền vào value
											onChange={this.onHandleChange}
										>
												<option value={0} >Nữ</option> {/*dựa vào value của option để hiển thị */}
												<option value={1} >Nam</option>
										</select>
										<br></br>

										<label>Ngôn Ngữ</label>
										<div className="radio">
											<label>
												<input 
													type="radio" 
													name="rdLang" 
													value="vi" 
													onChange={this.onHandleChange}
													checked={this.state.rdLang === "vi"}
												/>
												Tiếng Việt
											</label>
											<br></br>
											<label>
												<input 
													type="radio" 
													name="rdLang" 
													value="en" 
													onChange={this.onHandleChange}
													checked={this.state.rdLang === "en"}//kiểm tra xem giá trị nào hiện đầu tiên
											/>
												Tiếng Anh 
											</label>
										</div>
										
										
										<div className="checkbox">
											<label>
												<input 
													type="checkbox" 
													name="chkbstatus" //khi bấm vào checkbox nó sẽ lấy value truyền vào chkbstatus
													onChange={this.onHandleChange}
													value={true}
													checked={this.state.chkbstatus === true}
												/>
												Trạng Thái
											</label>
										</div>
										

										<button type="submit" className="btn btn-primary">Lưu Lại</button>&nbsp; {/*&nbsp là khoảng cách */}
										
										<button type="reset" className="btn btn-default" >Xóa Trắng</button>
									</form>
							  </div>
						</div>
						
					</div>	
				</div>
			</div>
			
		);
	}
}
export default App;
