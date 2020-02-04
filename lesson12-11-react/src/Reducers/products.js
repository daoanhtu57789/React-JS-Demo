import * as Types from './../contants/ActionTypes';
let initialState = [];


let findIndex = (products,id)=>{
    let result = -1 ;
    if(products.length > 0){
        products.forEach((product,index) => {
            if(product.id === id){
                result = index;
                return result;
            }
        })
    }
    
    return result;
} 
const products = (state = initialState,action) => {
    switch (action.type){
        case Types.FETCH_PRODUCT:{
            state = action.products;
            return [...state];
        }

        case Types.UPDATE_PRODUCT:{
            let index = findIndex(state,action.product.id);
            state[index] = action.product;
            return [...state];
        }

        case Types.ADD_PRODUCT:{
            state.push(action.product);
            return [...state];
        }

        case Types.DELETE_PRODUCT:{
            let index = findIndex(state,action.id)
            state.splice(index,1);
            return [...state];
        }
        default:
            return [...state];
    }
}

export default products;