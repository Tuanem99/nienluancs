import axiosClient from './axiosClient';

const  Products_has_ColorsAPI = {
    getAll(){
        const url = '/api/productshascolors';
        return axiosClient.get(url);
    },
    create(data){
        const url = '/api/productshascolors';
        return axiosClient.post(url, data);
    },
    remove(data){
        const url = '/api/deleteproductshascolors';
        return axiosClient.post(url, data);
    },

    getById(id){
        const url = `/api/productshascolors/${id}`;
        return axiosClient.get(url);
    },
};

export default  Products_has_ColorsAPI;