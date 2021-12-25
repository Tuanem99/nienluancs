import axiosClient from './axiosClient';
const categoryApi = {
    getAll(){
        const url = '/api/category';
        return axiosClient.get(url);
    },
    create(data){
        const url = '/api/category';
        return axiosClient.post(url, data);
    },
    remove(id){
        const url = `/api/category/${id}`;
        return axiosClient.delete(url);
    },
    update(data){
        const url = `/api/category/${data.id}`;
        return axiosClient.put(url,data)
    },

};

export default categoryApi;