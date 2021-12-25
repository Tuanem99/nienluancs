import axiosClient from './axiosClient';

const productApi = {
    getAll(){
        const url = '/api/product';
        return axiosClient.get(url)
    },
    get(id){
        const url = `/api/product/${id}`;
        return axiosClient.get(url)
    },
    create(data){
        const url = '/api/product';
        return axiosClient.post(url, data)
    },
    remove(id){
        const url = `/api/product/${id}`;
        return axiosClient.delete(url)
    },
    getAlls(){
        const url = '/api/products';
        return axiosClient.get(url)
    },
    update(data){
        const url = `/api/product/${data.id}`;
        return axiosClient.put(url,data)
    },
    updateImg(id, data){
        const url = `/api/productimg/${id}`;
        return axiosClient.put(url,data)
    },
};



export default productApi;