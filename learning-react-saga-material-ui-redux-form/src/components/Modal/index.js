import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Clear';
import propTypes  from 'prop-types';
import {connect} from 'react-redux';
import {compose , bindActionCreators} from 'redux';
import * as modalActions from './../../actions/modal';
import { Modal } from '@material-ui/core';

class CommonModal extends Component {
    render(){
        const {classes,open,component,modalActionsCreators,title} = this.props;
        const {hideModal} = modalActionsCreators;
        return (
            <Modal open = {open} onClose ={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <CloseIcon className={classes.icon} onClick={hideModal} />
                    </div>

                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}

CommonModal.propTypes = {
    classes : propTypes.object,
    open : propTypes.bool,
    component : propTypes.object,
    modalActionsCreators : propTypes.shape({
        hideModal : propTypes.func,
    }),
    title : propTypes.string
};

const mapStateToProps = state => ({
    open : state.modal.showModal,
    component : state.modal.component,
    title : state.modal.title
});

const mapDispatchToProps = dispatch =>{
    return {
        modalActionsCreators: bindActionCreators(modalActions,dispatch),
    }
};

const withConnect = connect(mapStateToProps,mapDispatchToProps);

export default compose(withStyles(styles),withConnect)(CommonModal);
