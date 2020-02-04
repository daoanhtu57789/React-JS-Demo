import * as type from '../constants/ActionTypes';
var initialState = {
    id:'',
    name:'',
    status:false
};

// var data = JSON.parse(localStorage.getItem('tasks')); //lấy dữ liệu từ local chuyển đổi

var myReducers = (state = initialState,action) =>{
    switch(action.type)
    {
        case type.EDIT_TASK:{
            state = action.task;
            
            return state;
        }

        default:
            return state;
    }
}

export default myReducers;