import * as type from './../constants/ActionTypes';
var initialState = false;

// var data = JSON.parse(localStorage.getItem('tasks')); //lấy dữ liệu từ local chuyển đổi

var myReducers = (state = initialState,action) =>{
    switch(action.type)
    {
        case type.TOGGLE_FORM:{
            
            return !state;
        }

        case type.OPEN_FORM:{
            return true;
        }

        case type.CLOSE_FORM:{
            return false
        }
        default:
            return state;
    }
}

export default myReducers;