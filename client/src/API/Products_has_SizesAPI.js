import axiosClient from './axiosClient';

const  Products_has_SizesAPI = {
    getAll(){
        const url = '/api/productshassizes';
        return axiosClient.get(url);
    },
    create(data){
        const url = '/api/productshassizes';
        return axiosClient.post(url, data);
    },
    remove(data){
        const url = '/api/deleteproductshassizes';
        return axiosClient.post(url, data);
    },
    getById(id){
        const url = `/api/productshassizes/${id}`;
        return axiosClient.get(url);
    },
};

export default  Products_has_SizesAPI;