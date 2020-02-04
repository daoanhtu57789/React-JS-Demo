import * as type from './../constants/ActionTypes';
var initialState = {
    name:'name',
    status:1
};

// var data = JSON.parse(localStorage.getItem('tasks')); //lấy dữ liệu từ local chuyển đổi

var myReducers = (state = initialState,action) =>{
    switch(action.type)
    {
        case type.SORT:{   
            return action.sort;
        }
        default:
            return state;
    }
}

export default myReducers;