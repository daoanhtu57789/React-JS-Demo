var initialState={
    by:'name',
    value: 1
}

var myReducer = (state = initialState,action)=>{   
    if(action.type ==='SORT'){
        var {by,value} = action.sort; //by = action.sort.by tương tự với value
        var status = state;
        return {
                by,
                value
        }
    }
    return state;
}//đây là tham số của createstore

export default myReducer;