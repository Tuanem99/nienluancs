import axiosClient from './axiosClient';

const token = localStorage.getItem("x-access-token");


const sizeApi = {
    getAll(){
        const url = '/api/size';
        return axiosClient.get(url, {headers: {'x-access-token': token}});
    },
    create(data){
        const url = '/api/size';
        return axiosClient.post(url, data);
    },
    remove(id){
        const url = `/api/size/${id}`;
        return axiosClient.delete(url);
    },
    update(data){
        const url = `/api/size/${data.id}`;
        return axiosClient.put(url,data)
    },

};

export default sizeApi;