import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    select,
    takeEvery,
} from 'redux-saga/effects';
import * as taskTypes from '../contants/task';
import { getList, addTask,updateTask,deleteTask } from './../apis/task';
import { STATUS_CODE, STATUSES } from '../contants/index';
import {
    fetchListTaskSuccess,
    fetchListTaskFailed,
    filterTaskSuccess,
    addTaskSuccess,
    addTaskFailed,
    fetchListTask,
    updateTaskSuccess,
    updateTaskFailed,
    deleteTaskSuccess,
    deleteTaskFailed,
} from './../actions/task';
import { showLoading, hideLoading } from './../actions/ui';
import { hideModal } from './../actions/modal';

function* watchListTaskAction() {
    while (true) {
        const action = yield take(taskTypes.FETCH_TASK); //lắng nghe và theo dõi action
        //khi fetch đc bắt thì code dưới mới đc chạy
        yield put(showLoading());
        let { params } = action.payload;
        //===từ đây sẽ bị block===//
        //truyền params vào hàm getlist
        const resp = yield call(getList, params);
        const { status, data } = resp;
        if (STATUS_CODE.SUCCESS === status) {
            //dispatch action fetchListTaskSuccess
            yield put(fetchListTaskSuccess(data));
        } else {
            //dispatch action fetchListTaskFalse
            yield put(fetchListTaskFailed(data));
        }
        //trì hoãn đóng loading 1s để tăng trải nghiệm người dùng
        yield delay(500);
        //đóng loading
        yield put(hideLoading());
    }
}
//genaretor function có dấu *

function* filterTaskSaga({ payload }) {
    yield delay(500);

    const { keyword } = payload;
    //select lấy data từ store tại saga
    yield put(fetchListTask({ q: keyword }));

    const list = yield select(state => state.tasks.listTask);
    // const filterTask = list.filter(task =>{
    //     //so sánh thì chuyển hết về thường để so sánh
    //     task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
    //     //trim bỏ khoảng trắng
    // });

    const filteredTask = list.filter(task =>
        task.title
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase()),
    );

    yield put(filterTaskSuccess(filteredTask));
}


function* addTaskSaga({ payload }) {
    const { title, description } = payload;
    yield put(showLoading());
    const resp = yield call(addTask, {
        title,
        description,
        status: STATUSES[0].values,
    });

    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(data));
        //Khi thêm mới thành công thì ẩn form nhập liệu đi
        yield put(hideModal());
    } else {
        yield put(addTaskFailed(data));
    }
    //ẩn loadding
    yield delay(1000);
    yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
    const { title, description, status } = payload;
    //hiển thị nền loading
    yield put(showLoading());
    //lấy ra danh sách
    const taskEditing = yield select(state => state.tasks.taskEditing);

    const resp = yield call(
        updateTask,
        { title, description, status },
        taskEditing.id,
    );
    const { data, status : statusCode } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
        yield put(updateTaskSuccess(data));
        //Khi thêm mới thành công thì ẩn form nhập liệu đi
        yield put(hideModal());
    } else {
        yield put(updateTaskFailed(data));
    }
    //ẩn loadding sau 1s
    yield delay(1000);
    yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
    const { id } = payload;
    yield put(showLoading());
    //Truyền vào deleteTask ở trong task của mục apis giá trị id
    const resp = yield call(deleteTask, id);

    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(deleteTaskSuccess(id));
        //Khi thêm mới thành công thì ẩn form nhập liệu đi
        yield put(hideModal());
    } else {
        yield put(deleteTaskFailed(data));
    }
    //ẩn loadding
    yield delay(1000);
    yield put(hideLoading());
}

function* rootSaga() {
    yield fork(watchListTaskAction);
    //takeLatest là phiên bản nâng cấp của fork và vòng lặp vô tận take
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
    yield takeEvery(taskTypes.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}
//rootsaga điều phối tất cả các saga
export default rootSaga;
