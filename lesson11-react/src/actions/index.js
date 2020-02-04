import * as types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}
//delete trên server rồi mới đến store
export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id))
        });//có request thì dispatch action
    };
}

export const actDeleteProducts = (id) => {
    return {
        type: types.DELETE_PRODUCTS,
        id
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCTS,
        product
    }
}

export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actEditProduct(res.data));
        });
    }
}

export const actEditProduct = (product) => {
    return {
        type: types.EDIT_PRODUCTS,
        product
    }
}



export const actUpdateProductRequest = (product) =>{
    return (dispatch) =>{
        return callApi(`products/${product.id}`,'PUT',product).then(res => {
            dispatch(actUpdateProduct(res.data))
        });
    }
}

export const actUpdateProduct = (product) =>{
    return {
        type : types.UPDATE_PRODUCTS,
        product
    }
}