import axiosClient from './axiosClient';

const colorApi = {
    getAll(){
        const url = '/api/color';
        return axiosClient.get(url);
    },
    create(data){
        const url = '/api/color';
        return axiosClient.post(url, data);
    },
    remove(id){
        const url = `/api/color/${id}`;
        return axiosClient.delete(url);
    },
    update(data){
        const url = `/api/color/${data.id}`;
        return axiosClient.put(url,data)
    },

};

export default colorApi;