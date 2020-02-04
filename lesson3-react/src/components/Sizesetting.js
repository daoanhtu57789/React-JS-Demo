import React,{Component} from 'react';



class Sizesetting extends Component{
    // constructor(props){
    //     super(props);
    //     //khai báo các size có thể
    // }

    // cach1 onPlus(size){
    //     if(size<36 && size !== 37)
    //         size = +size + 2;
    //     this.props.onReceiveSize(size);
    // }

    // onMinus(size){
    //     if( 7<size && size !== 8)
    //         size = +size - 2;
    //     this.props.onReceiveSize(size);
    // }

    onChange(value){
        this.props.onReceiveSize(value);
    }
    
	render(){

        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontsize}px</h3>
                </div>
                <div className="panel-body">
                    {/* cach1 <button type="button" className="btn btn-success" onClick={() => this.onMinus(this.props.fonsize)}>Giảm</button>
                    <button type="button" className="btn btn-success" onClick={() => this.onPlus(this.props.fonsize)}>Tăng</button> */}
                    <button type="button" className="btn btn-success" onClick={() => this.onChange(-2)}>Giảm</button>
                    <button type="button" className="btn btn-success" onClick={() => this.onChange(2)}>Tăng</button>
                </div>
            </div>
		);
	}
}

export default Sizesetting;
