import AdminHomePage from './../containers/AdminHomePage';
import TaskBroad from './../containers/TaskBroad';
export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
  {
    values: 0,
    label: 'READY',
  },
  {
    values: 1,
    label: 'IN PROGRESS',
  },
  {
    values: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
};


export const ADMIN_ROUTES = [
    {
        path : '/',
        name : 'Trang Quản Trị',
        exact : true,
        component : AdminHomePage
    },
    {
        path : '/task-board',
        name : 'Quản Lý Công Việc',
        component : TaskBroad
    }
];

