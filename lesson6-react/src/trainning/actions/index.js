import * as type from './../constants/ActionType';// ../ để đi ra ngoài thư mục
//import tất cả đặt rồi đặt tên là type
export const status = () =>{
    return{
        type:type.TOGGLE_STATUS
    }
}

export const sort = (sort) =>{
    return{
        type:type.SORT,
        sort //hoặc sort:sort
    }
}