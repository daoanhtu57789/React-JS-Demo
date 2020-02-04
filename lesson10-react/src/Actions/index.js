//nơi tạo các giá trị và điều kiện
import * as types from './../Constants/ActionType'
export const actAddToCart = (product)=>{
    return {
        type: types.ADD_TO_CART, //Hằng số cho việc thêm sự kiện mua hàng
        product
    }
}

export const actChangeMessage = (message)=>{
    return {
        type: types.CHANGE_MESSAGE, //Hằng số cho việc thay đổi tin nhắn
        message //tin nhắn 
    }
}

export const actDeleteToCart = (cart) =>{
    return{
        type : types.DELETE_TO_CART, //Hằng số cho việc thêm sự kiện xóa hàng
        cart //hàng cần xóa
    }
}

export const actUpdateToCart = (cart,value) =>{
    return{
        type : types.UPDATE_TO_CART,  //Hằng số cho việc thêm sự update hàng
        cart,  //hàng cần update
        value  //giá trị
    }
}