import {createStore} from 'redux';
import {status,sort} from './actions/index'; //export là export const
import myReducer from './Reducers/index'; //export default ko dùng ngoặc


//store quản lý các state của mình
const store = createStore(myReducer);

console.log('Default',store.getState());//getState lấy ra state ban đầu

store.dispatch(status());//truyền vào action để thực hiện 

console.log('after',store.getState());//getState lấy ra state mới
//thực hiện công việc sắp xếp từ z-a

store.dispatch(sort({
    by:'name',
    value:-1
}));//lấy đc cái state mới
console.log('SORT:',store.getState());

