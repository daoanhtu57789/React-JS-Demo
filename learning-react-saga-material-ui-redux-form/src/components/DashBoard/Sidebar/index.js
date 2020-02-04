import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import propTypes from 'prop-types';
import { ADMIN_ROUTES } from './../../../contants/index';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {

    toggleDrawer = () => {
        const {onToggleSidebar} = this.props;
        if(onToggleSidebar){
            onToggleSidebar();
        }
    };

    renderList() {
        const { classes} = this.props;
        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="div">
                    {ADMIN_ROUTES.map(item => {
                        return (
                            <NavLink
                                key = {item.path}
                                to={item.path}
                                exact={item.exact}
                                className={classes.menuLink}
                                activeClassName = {classes.menuLinkActive}
                            >
                                <ListItem
                                    key={item.path}
                                    className={classes.menuItem}
                                    button
                                >
                                    {item.name}
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        );
        return xhtml;
    }

    render() {
        const { classes,showSidebar } = this.props;
        return (
            <Drawer
                open={showSidebar}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="persistent"
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

Sidebar.propTypes = {
    classes: propTypes.object,
    showSidebar : propTypes.bool,
    onToggleSidebar : propTypes.object
};

export default withStyles(styles)(Sidebar);
