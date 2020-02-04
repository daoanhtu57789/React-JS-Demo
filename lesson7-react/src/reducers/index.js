import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm'; //sự kiện
import itemEditing from './itemEditing'; //sự kiện
import filterTable from './filterTable'; //sự kiện
import search from './search'; //sự kiện
import sort from './sort'; //sự kiện


const myReducers = combineReducers({
    tasks, //tasks : tasks
    isDisplayForm, //trên store đã có isdisplayform,
    itemEditing,
    filterTable,
    search,
    sort
});

export default myReducers;