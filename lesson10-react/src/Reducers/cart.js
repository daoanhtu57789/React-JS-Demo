import * as types from './../Constants/ActionType';
let data = JSON.parse(localStorage.getItem('CART')); //lấy item có key là CART

let initialState = data ? data : [];

//Tìm sản phẩm trong giỏ hàng và trả về id sản phẩm cần tìm
var findProductInCart = (cart,product) =>{
    let index = -1;
    if(cart.length > 0){
        for(let i = 0;i<cart.length;i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

const cart = (state = initialState,action)=>{
    let {product,cart,value} = action;//action nhận product ở file action index
    switch(action.type){
        case types.ADD_TO_CART:{
            //Kiểm tra xem sản phẩm vừa thêm có trong giỏ hàng chưa nếu có thì cộng thêm giá trị nếu không thì thêm vào giỏ
            let index = findProductInCart(state,product);
            if(index !== -1){ 
                state[index].quantity += 1;
            }
            else{
                state.push({
                    product,
                    quantity:1
                })
            }
            //Truyền dữ liệu vào localStorage để khi tải lại trang thì dữ liệu vẫn còn
            localStorage.setItem('CART',JSON.stringify(state));
            return[...state];
        }

        case types.DELETE_TO_CART:{
            let index = findProductInCart(state,cart.product);
            //cắt trong mảng state một phần tử từ vị trí index
            state.splice(index,1);
            //Truyền dữ liệu vào localStorage để khi tải lại trang thì dữ liệu vẫn còn
            localStorage.setItem('CART',JSON.stringify(state));
            return[...state];
        }

        case types.UPDATE_TO_CART:{
            let index = findProductInCart(state,cart.product);
            if(index !== -1){
                state[index].quantity += (+value);
            }
            //Truyền dữ liệu vào localStorage để khi tải lại trang thì dữ liệu vẫn còn
            localStorage.setItem('CART',JSON.stringify(state));
            return[...state];
        }
        default:
            return [...state];
    }
}
export default cart;