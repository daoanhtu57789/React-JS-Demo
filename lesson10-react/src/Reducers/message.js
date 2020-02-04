import * as types from './../Constants/ActionType';
import * as Message from './../Constants/Messages';
//Lời chào mặc định khi tải trang web
let initialState = Message.MSG_WELCOME;

const message = (state = initialState,action)=>{
    switch(action.type){
        case types.CHANGE_MESSAGE:{
            return action.message;
        }
        default:
            return state;
    }
}
export default message;