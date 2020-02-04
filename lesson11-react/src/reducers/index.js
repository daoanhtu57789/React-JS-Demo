import {combineReducers} from 'redux';
import products from './products';
import itemEditting from './itemEditing';
//sử dụng redux
const appReducers = combineReducers({
    products,
    itemEditting
});

export default appReducers;