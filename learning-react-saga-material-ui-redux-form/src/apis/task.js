import axiosSerice from './../commons/axiosService';
import {API_ENDPOINT} from './../contants';
import qs from 'query-string';

//http://localhost:3000/tasks

const url = 'tasks';

//http://localhost:3000/tasks METHOD : GETS
export const getList = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`;
        //qs.stringify(params) chạy ra được key=value vì params là object hoặc vào trang https://www.npmjs.com/package/query-string để biết thêm
    }
    return axiosSerice.get(`${API_ENDPOINT}/${url}${queryParams}`);
}

//http://localhost:3000/tasks METHOD : POST
export const addTask = (data) => {
    return axiosSerice.post(`${API_ENDPOINT}/${url}`,data);
}

//http://localhost:3000/tasks/id METHOD : PUT
export const updateTask = (data,taskId) => {
    return axiosSerice.put(`${API_ENDPOINT}/${url}/${taskId}`,data);
}

//http://localhost:3000/tasks/id METHOD : DELETE
export const deleteTask = (taskId) => {
    return axiosSerice.delete(`${API_ENDPOINT}/${url}/${taskId}`);
}
