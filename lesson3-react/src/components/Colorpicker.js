import React,{Component} from 'react';

class Colorpicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:['red' , 'blue' , 'green' , '#ccc']
        };
    }

    showColor(color){
        return {
            backgroundColor: color
        };
    }

    setActiveColor(color){
        //truyen color vua chon vao onSetColor o trong App.js
        this.props.onReceiveColor(color);
    }

	render(){
        var elmColors = this.state.color.map((color,index) =>{
            return(
                <span 
                    key = {index} 
                    style = {this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}
                    onClick = {() => this.setActiveColor(color)} 
                >{/*Có tham số thì dùng arow function */}</span>
            
            )
        }

        );

		return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elmColors}
                    </div>
                </div>
            </div>
		);
	}
}

export default Colorpicker;
