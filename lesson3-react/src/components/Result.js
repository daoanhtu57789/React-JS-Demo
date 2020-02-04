import React,{Component} from 'react';

class Result extends Component{

	showBorder(){
		return{
			color : this.props.color,
			borderColor : this.props.color, 
			fontSize : this.props.fontsize 
		};
	}
	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p >Color : {this.props.color} Fontsize : {this.props.fontsize}px</p> {/*this.prop.color lấy color ở bên app.js*/}
				<div id="content" style = {this.showBorder()} >
					Nội Dung Setting
				</div>
			</div>
		);
	}
}

export default Result;
