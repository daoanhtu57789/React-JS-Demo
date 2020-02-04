import * as type from '../constants/ActionTypes';
var initialState = {
    name:'',
    status : -1//-1 lấy tất cả
};

// var data = JSON.parse(localStorage.getItem('tasks')); //lấy dữ liệu từ local chuyển đổi

var myReducers = (state = initialState,action) =>{
    switch(action.type)
    {
        case type.FILTER_TABLE:{
            action.filter.status = +action.filter.status;//nếu là kiểu string conver sang kiểu số
            return action.filter;
        }

        default:
            return state;
    }
}

export default myReducers;