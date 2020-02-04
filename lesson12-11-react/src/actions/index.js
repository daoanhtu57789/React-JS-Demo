import * as Types from './../contants/ActionTypes';
import callApi from './../utils/callApi';

//yêu cầu dữ liệu từ API
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        // do lấy dữ liệu nên body sẽ là null,nếu sửa hay thêm thì body sẽ có giá trị
        return callApi('products','GET',null).then(res =>{
            dispatch(actFetchProducts(res.data));//truyền data lấy từ API thông qua biến res là phản hồi của API
        })
    };
}
//sự kiện ở redux
export const actFetchProducts = (products) =>{
    return{
        type : Types.FETCH_PRODUCT,
        products
    }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products','POST',product).then(res =>{
            dispatch(actAddProduct(res.data));//truyền data lấy từ API thông qua biến res là phản hồi của API
        })
    }
}
//sự kiện ở redux
export const actAddProduct = (product) =>{
    return{
        type : Types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`,'PUT',product).then(res =>{
            dispatch(actUpdateProduct(res.data));//truyền data lấy từ API thông qua biến res là phản hồi của API
        })
    }
}
//sự kiện ở redux
export const actUpdateProduct = (product) =>{
    return{
        type : Types.UPDATE_PRODUCT,
        product
    }
}

export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'GET',null).then(res =>{
            dispatch(actEditProduct(res.data));//truyền data lấy từ API thông qua biến res là phản hồi của API
        })
    }
}
//sự kiện ở redux
export const actEditProduct = (product) =>{
    return{
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'DELETE',null).then(res =>{
            dispatch(actDeleteProduct(id));//truyền data lấy từ API thông qua biến res là phản hồi của API
        })
    }
}
//sự kiện ở redux
export const actDeleteProduct = (id) =>{
    return{
        type : Types.DELETE_PRODUCT,
        id
    }
}
