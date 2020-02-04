import * as Types from './../contants/ActionTypes';
let initialState = {};

const itemEditing = (state = initialState,action) => {
    switch (action.type){
        case Types.EDIT_PRODUCT:{
            state = action.product;
            return state;
        }
        default:
            return state;
    }
}

export default itemEditing;