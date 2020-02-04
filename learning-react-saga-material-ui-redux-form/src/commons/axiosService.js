import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create(); //tạo instance này là của hàm construc
        instance.interceptors.response.use(this.handleSuccess,this.handleError)
        this.instance = instance; //sử dụng this để chuyển instance là của class axio để các hàm khác có thể dùng
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    }

    post(url,body) {
        return this.instance.post(url,body);
    }

    put(url,body) {
        return this.instance.put(url,body);
    }

    delete(url) {
        return this.instance.delete(url);
    }
}

export default new AxiosService();
