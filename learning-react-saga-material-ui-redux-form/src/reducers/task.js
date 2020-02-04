import * as taskConstants from './../contants/task';
import { toastError, toastSuccess } from './../helpers/toastHelpers';
const initialState = {
    listTask: [],
    taskEditing : null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASK: {
            return {
                ...state,
                listTask : []
            }
        }

        case taskConstants.FETCH_TASK_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                listTask : data
            };
        }
        case taskConstants.FETCH_TASK_FAILED: {
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: [],
            };
        }

        case taskConstants.ADD_TASK: {
            return {
                ...state,
            };
        }

        case taskConstants.ADD_TASK_SUCCESS: {
            const {data } = action.payload;
            toastSuccess('Thêm Mới Công Việc Thành Công');
            return {
                ...state,
                listTask : [data].concat(state.listTask)
            };
        }

        case taskConstants.ADD_TASK_FAILED: {
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
            };
        }

        case taskConstants.SET_TASK_EDITING: {
            const {task} = action.payload;
            return {
                ...state,
                taskEditing : task
            };
        }

        case taskConstants.UPDATE_TASK :{
            return {
                ...state,
            };
        }

        case taskConstants.UPDATE_TASK_SUCCESS :{
            const {data} = action.payload;

            const {listTask} = state;
            const index = listTask.findIndex(item => item.id === data.id);
            if(index !== -1){
                //cắt từ vị trí 0 đến index cho vào list mới
                //chèn data vào vị trí index cho vào list mới
                //cắt từ vị trí trước index rồi cho vào list mới
                //vd:[0,1,2,3,4] muốn trèn 5 vào index là 2 thì
                //cắt 0,1 cho vào list rồi chèn 5 vào rồi cắt 3,4 cho vào list =>[0,1,5,3,4]

                const newList = [
                    ...listTask.slice(0,index),
                    data,
                    ...listTask.slice(index+1),
                ];

                toastSuccess('Cập Nhật Công Việc Thành Công');
                return {
                    ...state,
                    listTask : newList,
                };
            }

            return {
                ...state,

            };
        }

        case taskConstants.UPDATE_TASK_FAILED: {
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
            };
        }

        case taskConstants.DELETE_TASK :{
            return {
                ...state,
            };
        }

        case taskConstants.DELETE_TASK_SUCCESS :{
            const {data : taskId} = action.payload;
            toastSuccess('Xóa Công Việc Thành Công');
            return {
                ...state,
                //loaị bỏ phần tử có id trùng với taskId
                listTask : state.listTask.filter(item => item.id !== taskId),
            };
        }

        case taskConstants.DELETE_TASK_FAILED: {
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export default reducer;
