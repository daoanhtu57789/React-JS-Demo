import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
// import TaskBroad from '../TaskBroad/index.js';
import theme from '../../commons/Theme/index';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
import {BrowserRouter,Switch} from 'react-router-dom';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute';
import {ADMIN_ROUTES} from './../../contants/index';
//import để reset css
import CssBaseline from '@material-ui/core/CssBaseline';
const store = configureStore();
class App extends Component {
    renderAdminRoute() {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map(route =>{
            return <AdminLayoutRoute 
                    key = {route.path} 
                    component = {route.component} 
                    exact = {route.exact} 
                    path = {route.path} 
                    name={route.name} 
                />
            // có thể thay route thành component = {route.component} // exact = {route.exact}// path = {route.path} route = {route}
        });
        return xhtml;
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        {/* ToastContainer dùng để thông báo thành công hay thất bại*/}
                        <ToastContainer/>
                        <GlobalLoading/>
                        <Modal />
                        <Switch>
                            {this.renderAdminRoute()}
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
