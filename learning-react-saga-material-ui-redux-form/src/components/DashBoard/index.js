import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import propTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as uiActions from './../../actions/ui';
import cn from 'classnames';
class DashBoard extends Component {
    handleToggleSidebar = value => {
        const { uiActionsCreator } = this.props;
        const { showSidebar, hideSidebar } = uiActionsCreator;
        if (value === true) {
            showSidebar();
        } else {
            hideSidebar();
        }
    };
    render() {
        const { children, classes, name, showSidebar } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header
                    name={name}
                    showSidebar={showSidebar}
                    onToggleSidebar={this.handleToggleSidebar}
                />
                <div className={classes.wrapper}>
                    <Sidebar
                        showSidebar={showSidebar}
                        onToggleSidebar={this.handleToggleSidebar}
                    />
                    <div className={cn(classes.wrapperContent,{
                        //tạo class mới với điều kiện
                        [classes.shirtLeft] : showSidebar === false
                    })}>{children}</div>
                </div>
            </div>
        );
    }
}

DashBoard.propTypes = {
    children: propTypes.object,
    classes: propTypes.object,
    name: propTypes.string,
    showSidebar: propTypes.bool,
    uiActionsCreator: propTypes.shape({
        showSidebar: propTypes.func,
        hideSidebar: propTypes.func,
    }),
};

const mapStateToProps = state => {
    return {
        showSidebar: state.ui.showSidebar,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uiActionsCreator: bindActionCreators(uiActions, dispatch),
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    withStyles(styles),
)(DashBoard);
