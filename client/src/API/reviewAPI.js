import axiosClient from './axiosClient';

const reviewApi = {
    create(data){
        const url = '/api/review';
        return axiosClient.post(url, data);
    },
    get(id){
        const url = `/api/review/${id}`;
        return axiosClient.get(url);
    },
    getAll(){
        const url = '/api/review/';
        return axiosClient.get(url);
    },
    delete(id){
        const url = `/api/review/${id}`;
        return axiosClient.delete(url);
    }

};

export default reviewApi;