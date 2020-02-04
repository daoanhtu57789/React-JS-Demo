import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
class TaskItem extends Component {
    onEditTask = () => {
        this.props.onEditTask(this.props.task); //props edit ở dispatchto props
        this.props.onOpenForm();
    }


    onDelete = () => {//onDelete arrow function này ở trong onclick
        this.props.onDelete(this.props.task.id);//onDelete này ở mapDispatchToProps
        this.props.onCloseForm();
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    render() {
        var { index, task } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? 'label label-danger' : 'label label-success'} onClick={this.onUpdateStatus}>{task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
                        <span className="fa fa-pencil-alt mr-5"></span>
                        Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>
                        Xóa
                    </button>

                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => { //state này mình lấy trên store
    return {

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(action.updateStatus(id));//action.updateStatus lấy từ form index ở trong action
        },
        onDelete: (id) => {
            dispatch(action.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(action.closeForm());
        }, //do bắt sự kiện ở taskform
        onOpenForm: () => {
            dispatch(action.openForm());
        },
        onEditTask: (task) => {
            dispatch(action.editTask(task))
        }
    }
}

//kết nối để lấy dữ liệu
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);