import * as type from './../constants/ActionTypes';

export const listAll = () =>{
    return {
        type: type.LIST_ALL
    }
};
//gửi lên cho reducer phân tích
export const saveTask = (task) =>{
    return {
        type: type.SAVE_TASK,
        task //task:task
    }
};

export const toggleForm = () =>{
    return {
        type: type.TOGGLE_FORM,
    }
};

export const closeForm = () =>{
    return {
        type: type.CLOSE_FORM,
    }
};

export const openForm = () =>{
    return {
        type: type.OPEN_FORM,
    }
};

export const updateStatus = (id) =>{
    return {
        type: type.UPDATE_STATUS,
        id //id:id
    }
};

export const deleteTask = (id) =>{
    return {
        type: type.DELETE_TASK,
        id //id:id
    }
};

export const editTask = (task) =>{
    return {
        type: type.EDIT_TASK,
        task //id:id
    }
};

export const filterTask = (filter) =>{
    return {
        type: type.FILTER_TABLE,
        filter//bao gồm filterName và Status
    }
};


export const searchTask = (keyword) =>{
    return {
        type: type.SEARCH,
        keyword
    }
};


export const sortTask = (sort) =>{
    return {
        type: type.SORT,
        sort
    }
};
