import React, { Component } from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import LoadingIcon from './../../assets/images/loading.gif';
import propTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
// import * as uiActios from '../../actions/ui';
class GlobalLoading extends Component {
    render() {

        const {classes,showLoading} = this.props;
        let xhtml = null;
        if(showLoading){
            xhtml = (
                <div className={classes.GlobalLoading}>
                <img src = {LoadingIcon} alt = "loading" className={classes.icon}></img>
                </div>
            );
        };
        return xhtml;
    }
}

GlobalLoading.propTypes = {
    classes : propTypes.object,
    showLoading : propTypes.bool,

};

const mapStateToProps = state =>{
    return{
        showLoading : state.ui.showLoading,
    };
};


const withConnect = connect(
    mapStateToProps,
    null
);
//dùng đê gộp nhiều cái lại,và có phân biệt thứ tự trước và sau
export default compose(
    withStyles(styles),
    withConnect
)(GlobalLoading);
