import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import propTypes from 'prop-types';
//import các component của material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

const menuId = 'primary-search-account-menu';
// const mobileMenuId = 'primary-search-account-menu-mobile';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    // handleProfileMenuOpen = (event) => {
    //     this.setState({
    //         mobileMoreAnchorEl : event.currentTarget
    //     });
    // };

    handleMenuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    // handleMobileMenuClose = () => {
    //     console.log('handleMobileMenuClose');
    // };

    handleMenuClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    renderMenu = () => {
        const { anchorEl } = this.state;
        //khi click vào thì có thằng anchorEl => có isMenuOpen
        const isMenuOpen = Boolean(anchorEl);
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>

            </Menu>
        );
    };

    //Dành cho di động
    // renderMobileMenu = () => {
    //     const { mobileMoreAnchorEl} = this.state;
    //     //khi click vào thì có thằng mobileMoreAnchorEl => có isMobileMenuOpen
    //     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    //     return (
    //         <Menu
    //             anchorEl={mobileMoreAnchorEl}
    //             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //             id={mobileMenuId}
    //             keepMounted
    //             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //             open={isMobileMenuOpen}
    //             onClose={this.handleMobileMenuClose}
    //         >

    //             <MenuItem onClick={this.handleProfileMenuOpen}>
    //                 <IconButton
    //                     aria-label="account of current user"
    //                     aria-controls="primary-search-account-menu"
    //                     aria-haspopup="true"
    //                     color="inherit"
    //                 >
    //                     <AccountCircle />
    //                 </IconButton>
    //                 <p>Profile</p>
    //             </MenuItem>
    //         </Menu>
    //     );
    // };

    handleToggleSidebar = () =>{
        const {showSidebar,onToggleSidebar} = this.props;
        if(onToggleSidebar){
            onToggleSidebar(!showSidebar);
        }
    }

    render() {
        const { classes,name } = this.props;

        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick = {this.handleToggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            {name}
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        {/*
                        dành cho điện thoại
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div> */}
                    </Toolbar>
                </AppBar>
                {/* bản dành cho di động */}
                {/* {this.renderMobileMenu()} */}
                {this.renderMenu()}
            </div>
        );
    }
}
Header.propTypes = {
    classes: propTypes.object,
    name: propTypes.string,
    showSidebar : propTypes.bool,
    onToggleSidebar : propTypes.func
};
export default withStyles(styles)(Header);
