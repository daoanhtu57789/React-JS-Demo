import * as type from '../constants/ActionTypes';
var initialState = '';

// var data = JSON.parse(localStorage.getItem('tasks')); //lấy dữ liệu từ local chuyển đổi

var myReducers = (state = initialState,action) =>{
    switch(action.type)
    {
        case type.SEARCH:{
            
            return action.keyword;
        }

        default:
            return state;
    }
}

export default myReducers;