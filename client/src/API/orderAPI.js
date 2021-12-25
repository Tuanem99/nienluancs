import axiosClient from './axiosClient';

const orderApi = {

    create(data){
        const url = '/api/order';
        return axiosClient.post(url, data);
    },
    get(){
        const url = '/api/order';
        return axiosClient.get(url);
    },
    cancelOrder(id){
        const url = `/api/order/${id}`;
        return axiosClient.delete(url);
    },
    getall(){
        const url = '/api/orderall';
        return axiosClient.get(url);
    },
    conformCancle(id){
        const url = `/api/order/conformcancle/${id}`;
        return axiosClient.delete(url)
    },
    Conform(id){
        const url = `/api/order/conform/${id}`;
        return axiosClient.delete(url)
    }

};

export default orderApi;