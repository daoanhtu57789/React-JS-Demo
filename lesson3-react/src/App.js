import React,{Component} from 'react';
import './App.css';
import Reset from './components/Reset';

import Colorpicker from './components/Colorpicker';

import Sizesetting from './components/Sizesetting';

import Result from './components/Result';

class App extends Component{

	constructor(props){
		super(props);
		this.state={
			color : 'red',
			fontsize : 12
		}//khởi tạo ban đầu
		this.onSetColor = this.onSetColor.bind(this);
		
		this.onSetSize = this.onSetSize.bind(this);
		
		this.onReset = this.onReset.bind(this);
	}

	onSetColor(params){
		this.setState({
			color : params,
		});
	}

	// cach1 onSetSize(params){
	// 	this.setState({
	// 		color : this.state.color,
	// 		fonsize : params
	// 	});
	// }

	onSetSize(value){
		if(this.state.fontsize + value >= 8 && this.state.fontsize + value <=36){ 
			this.setState({
				
				fontsize : this.state.fontsize + value //+2 -2
			});
		}
	}

	onReset(paramsc,paramss){
		this.setState({
			color : paramsc,
			fontsize : paramss
		});
	}

	render(){
		return(
			<div className="container mt-50">
				<div className="row">
					<noscript>chèn các jsx ở các Component khác vào</noscript>
					<Colorpicker color = {this.state.color} onReceiveColor={this.onSetColor}/> 
					{/* this.state.color lấy dữ liệu state ở hàm constructor để truyền vào component Colorpicker*/}
					
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<Sizesetting fontsize={this.state.fontsize} onReceiveSize={this.onSetSize}/>
						
						<Reset onReceiveReset = {this.onReset}/>
					</div>	

					<Result color = {this.state.color} fontsize={this.state.fontsize}/>
					
				</div>
			</div>
			
		);
	}
}

export default App;
