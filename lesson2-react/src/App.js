import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

	processUser(element){
		//hàm ở trong là một erow function
		return element.map((a,index) => {
			if(a.display){
				return( 
					<div key = {a.id}>
						<h2>{a.id}</h2>
	
						<h2>{a.name}</h2>
						
						<h2>{a.age}</h2>
						
						<h2>{console.log( a.display)}</h2>
					</div>
				);
			}
		});
		
	}

  	render(){
	
		var a = 5;
		var b = 4

		var object = {
			name : "anhtu",
			age : 21,
			display : true
		};

		var objects = [
			{
				id : 1,
				name : "anhtu",
				age : 21,
				display : true,
			},
			{
				id : 2,
				name : "anhtu2",
				age : 21,
				display : false
			},
			{
				id : 3,
				name : "anhtu3",
				age : 21,
				display : true
			},
			{
				id : 4,
				name : "anhtu4",
				age : 21,
				display : false
			}
		];


		return(
			<div>
				<nav className="navbar navbar-default" role="navigation">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						</button>
						<a className="navbar-brand" href="#">Title</a>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
						</ul>
						<form className="navbar-form navbar-left" role="search">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Search" />
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Link</a></li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
								<ul className="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li><a href="#">Separated link</a></li>
								</ul>
							</li>
						</ul>
					</div>

				</nav>
				<div>
					<h2>a: {a}</h2>
					<br></br>
					<h2>b: {b}</h2>
					<br></br>
					<h1>a+b = {a+b}</h1>
					<h2>Name : {object.display?object.age : object.name}</h2>
					<noscript>Sử dụng câu đk loại 3 hoặc if đều đc,sử dụng noscript để comment</noscript>
					<h2>Age : {object.display?object.name : object.age}</h2>
					<br></br>
					<hr></hr>
					<h2>
						<noscript>a đại diện cho từng object con bên trong objects,nó sẽ duyệt hết</noscript>
						{objects.map((a) => {
								return( 
									<div key = {a.id}> <noscript>thêm key để phân biệt ko lỗi vì mỗi một lần sẽ có 1 div khác nhau</noscript>
										<div>{a.display?'Tên: ' + a.name : ''}</div>
										<p>{a.display?'Tuổi: ' +a.age : ''}</p>
									</div>
									)	
								}
							)
						}
					</h2>

					<hr></hr>
					<hr></hr>
					<div>
						{this.processUser(objects)}
					</div>
				</div>
			</div>
		);
	}
}
export default App;
