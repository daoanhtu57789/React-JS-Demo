import React, { Component } from 'react';
import styles from './styles';
import { withStyles,Grid ,Box,MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {compose , bindActionCreators} from 'redux';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
//1 field tương ứng với 1 ô input hoặc là 1 select ....
import {reduxForm , Field} from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';
import renderSelectField from '../../components/FormHelper/Select';

class TaskForm extends Component {

    handleSubmitForm = (data) =>{
        // console.log('data',data);
        const {taskActionsCreators,taskEditing} = this.props;
        const {addTask,updateTask} = taskActionsCreators;
        const {title, description,status} = data;
        if(taskEditing && taskEditing.id){
            updateTask(title,description,status);
        }else
        {
            addTask(title,description);
        }
    }

    // required = value =>{
    //     let error = "Vui Lòng Nhập Tiêu Đề.";
    //     if(value !== null && typeof value != 'undefined' && value.trim() !== ''){
    //         error = null;
    //     }
    //     return error;
    // }

    // minLength5 = value =>{
    //     let error = "Vui Lòng Nhập Số Kí Tự Lớn Hơn 5.";
    //     if(value.length > 5){
    //         error = null;
    //     }
    //     return error;
    // }


    renderStatusSelection() {
        let xhtml = null;
        const {taskEditing,classes} = this.props;
        if(taskEditing && taskEditing.id){
            xhtml = (
                <Field
                    id = "status"
                    label = "Trạng Thái"
                    className = {classes.select}
                    name = "status"
                    component = {renderSelectField}
                >
                    <MenuItem value={0}>Ready</MenuItem>
                    <MenuItem value={1}>In Progress</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                </Field>
            );
        }
        return xhtml;
    }

    render() {
        //handleSubmit là hàm mà redux-form nó cung cấp cho

        const {classes, modalActionsCreators,handleSubmit,invalid,submitting} = this.props;
        const {hideModal} = modalActionsCreators;

        return (
            <form onSubmit = {handleSubmit(this.handleSubmitForm)}>
                <Grid container >
                    <Grid item md={12}>
                        <Field
                            id = "title"
                            label = "Tiêu Đề"
                            className = {classes.textField}
                            margin = "normal"
                            name = "title"
                            component = {renderTextField}
                            //Cách dùng validate cho 1 field
                            // validate = {[this.required,this.minLength5]}
                            // value = {taskEditing ? taskEditing.title:''}
                        />
                    </Grid>

                    <Grid item md={12}>
                         <Field
                            id = "description"
                            label = "Mô Tả"
                            className = {classes.textField}
                            multiline
                            rowmax = "4"
                            margin = "normal"
                            name = "description"
                            component = {renderTextField}
                            //dùng cái initialValue thì mới truyền vào value được
                            // value = {taskEditing ? taskEditing.description:''}
                        />
                    </Grid>

                    {this.renderStatusSelection()}

                    <Grid item md={12}>
                        {/* flexDirection="row-reverse" Đảo ngược vị trí button ở trong */}
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" onClick={hideModal}>
                                    Hủy Bỏ
                                </Button>
                            </Box>

                            <Button disabled = {invalid || submitting} variant="contained" color="primary" type="submit">
                                Lưu Lại
                            </Button>

                        </Box>

                    </Grid>
                </Grid>
            </form>
        );
  }
}

TaskForm.propTypes = {
    classes : propTypes.object,
    modalActionsCreators : propTypes.shape({
        hideModal : propTypes.func,
    }),
    taskActionsCreators : propTypes.shape({
        addTask : propTypes.func,
        updateTask : propTypes.func
    }),
    handleSubmit : propTypes.func,
    invalid : propTypes.bool,
    submitting : propTypes.bool
}

const mapStateToProps = (state)=> {
    return {
        taskEditing : state.tasks.taskEditing,
        //Có initialValues thì mới chuyền được dữ liệu ở taskEditing
        initialValues: {
            //title thì truyền vào trường có name là là title tương tự như cái khác
            title : state.tasks.taskEditing ? state.tasks.taskEditing.title : null,
            description : state.tasks.taskEditing? state.tasks.taskEditing.description : null,
            status : state.tasks.taskEditing? state.tasks.taskEditing.status : null
        }
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        modalActionsCreators: bindActionCreators(modalActions,dispatch),
        taskActionsCreators: bindActionCreators(taskActions,dispatch),
    }
};

const withConnect = connect(mapStateToProps,mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
    form : FORM_NAME,
    validate
});
export default compose(
                    withStyles(styles),
                    withConnect,
                    withReduxForm
)(TaskForm);
