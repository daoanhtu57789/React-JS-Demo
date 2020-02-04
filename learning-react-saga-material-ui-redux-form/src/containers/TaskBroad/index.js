import { withStyles, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../TaskForm/index';
import TaskList from '../../components/TaskList/index';
import SearchBox from '../../components/SearchBox/index';
import { STATUSES } from '../../contants/index';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';
import * as modalActions from './../../actions/modal';

class TaskBroad extends Component {
    state = {
        open: false,
    };

    // componentDidMount() {
    //     const { taskActionCreators } = this.props;
    //     const { fetchListTask } = taskActionCreators;
    //     fetchListTask();
    // }

    renderBroad = () => {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            // md là số cột,có 12 cột tất cả
            //xs là thu nhỏ thì sẽ là 12 cột tức là full chiều ngang
            <Grid container spacing={2}>
                {STATUSES.map(status => {
                    // filter sẽ trả về các listTask có status giống với giá trị tương ứng với STATUSES mà đang map
                    // xong rồi render ra filter
                    const taskFiltered = listTask.filter(
                        task => task.status === status.values,
                    );

                    return (
                        <TaskList
                            key={status.values}
                            taskFiltered={taskFiltered}
                            status={status}
                            onClickEdit = {this.handleEditTask}
                            onClickDelete = {this.showModalDeleteTask}
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    };
    openForm = () => {
        const {modalActionsCreators ,taskActionCreators} = this.props;
        const { setTaskEditing } = taskActionCreators;
        //đặt taskEditing ở trong state là null khi mở form để thêm
        setTaskEditing(null);
        const {showModal, changeModalContent,changeModalTitle} = modalActionsCreators;
        showModal();
        changeModalTitle("Thêm Mới Công Việc");
        changeModalContent(<TaskForm />)
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    loadData = () =>{
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }

    renderSearchBox = () =>{
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange = {this.handleFilter}/>
        );
        return xhtml;
    }

    handleFilter = (e) =>{
        const {value} = e.target;
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        //nhập 1 kí tự filter task đc gọi
        filterTask(value);
    }

    handleEditTask = (task) =>{
        const { taskActionCreators,modalActionsCreators } = this.props;
        const { setTaskEditing} = taskActionCreators;
        setTaskEditing(task);
        //Mở form chỉnh sửa và có các thông số luôn trong form
        const {showModal, changeModalContent,changeModalTitle} = modalActionsCreators;
        showModal();
        changeModalTitle("Cập Nhật Công Việc");
        changeModalContent(<TaskForm task={task}/>);

    }

    showModalDeleteTask = (task) =>{
        const { modalActionsCreators,classes } = this.props;

        //Mở form chỉnh sửa và có các thông số luôn trong form
        const {showModal,hideModal, changeModalContent,changeModalTitle} = modalActionsCreators;
        showModal();
        changeModalTitle("Xóa Công Việc");
        changeModalContent(
            <div className = {classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Bạn Có Chắc Muốn Xóa {' '}
                    <span className={classes.modalConfirmTextBold}>{task.title}</span>?
                </div>
                <Box display="flex" flexDirection = "row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button variant="contained" onClick = {hideModal}>
                            Hủy Bỏ
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" onClick={() => this.handleDeleteTask(task)}>
                            Đồng Ý
                        </Button>
                    </Box>
                </Box>
            </div>
        );
    }

    handleDeleteTask(task){
        const {id} = task;
        const {taskActionCreators} = this.props;
        //lấy action deleteTask ở action task.js
        const {deleteTask} = taskActionCreators;
        //truyền id vào.
        deleteTask(id);

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBroad}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style = {{
                        marginRight : 20,
                    }}
                    onClick={this.loadData}
                >
                    Load Data
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.openForm}
                >
                    <AddIcon /> Thêm Mới Công Việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBroad()}
            </div>
        );
    }

}

TaskBroad.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing:PropTypes.func,
        deleteTask : PropTypes.func,
    }),
    listTask: PropTypes.array,
    modalActions: PropTypes.shape({
        showModal : PropTypes.func,
        hideModal : PropTypes.func,
        changeModalContent : PropTypes.func,
        ChangeModalTitle : PropTypes.func,
    }),

};

const mapStateToProps = state => {
    return {
        listTask: state.tasks.listTask,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
        modalActionsCreators: bindActionCreators(modalActions, dispatch),
    };
};
export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(TaskBroad),
);
