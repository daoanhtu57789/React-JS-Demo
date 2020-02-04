import * as type from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('tasks')); //lấy dữ liệu từ local chuyển đổi
var initialState = data?data :[] //do tasks là một mảng
var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generatorID = () =>{
    return s4().concat('-',s4(),'-',s4(),'-','-',s4(),'-',s4(),s4(),'-','-',s4(),s4()+'-',s4(),s4(),s4());
}

var findIndex = (tasks,id) =>{//tìm kiếm và trả về vị trí id mà click ở trong taskItem
    var resualt = -1;
    tasks.forEach((task,index) =>{
        if(task.id === id){
            return resualt = index;
        }
    });
    return resualt;
}


var myReducers = (state = initialState,action) =>{
    switch(action.type)
    {
        case type.LIST_ALL:{
            return state;
        }
        case type.SAVE_TASK:{
            var task={
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
            }
            if(!task.id){
                task.id = generatorID();
                state.push(task);
            }
            else{
                let index = findIndex(state,task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        }
        case type.UPDATE_STATUS:{
            let id=action.id;
            let index = findIndex(state,id);
            
            // let cloneTask ={
            //     ...state[index] //copy object bằng dấu ...state
            // }
            // cloneTask.status = !cloneTask.status;
            // state[index] = cloneTask;
            //cập nhật cách khác
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem("tasks",JSON.stringify(state)); //lưu lại sau khi refesh
            return  [...state];
        }

        case type.DELETE_TASK:{
            let id = action.id;
            let index = findIndex(state,id);
            state.splice(index,1);  //cắt bỏ một phần tử từ vị trí index
            localStorage.setItem("tasks",JSON.stringify(state)); //lưu lại sau khi refesh

            return [...state];
        }
        default:
            return state;
    }
}

export default myReducers;