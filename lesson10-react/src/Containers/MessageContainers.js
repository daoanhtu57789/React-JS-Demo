import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../Components/Message';


class MessageContainers extends Component{
    //lớp này render kết nối với store và components rồi render ra
    render() {
        return (
            //truyền message từ lấy được từ store
            <Message
                message = {this.props.message}
            />
        );
    }
}

//check dữ liệu nhận của ProductsContainers
MessageContainers.propTypes ={
    message : PropTypes.string.isRequired
}



//Lấy dữ liệu từ store
const mapStateToProps = (state) =>{
    return{
        message : state.message
    }
}


export default connect(mapStateToProps,null)(MessageContainers);