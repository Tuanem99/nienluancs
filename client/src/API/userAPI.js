import axiosClient from './axiosClient';
const userApi = {
    getAll(){
        const url = '/api/user/getall';
        return axiosClient.get(url)

    },
    register(data){
        const url = '/api/user/signup';
        return axiosClient.post(url, data)
    },

    login(data){
        const url = '/api/user/signin';
        return axiosClient.post(url, data)
    },
    upload(data){
        const url = '/api/user/upload';
        return axiosClient.post(url, data, { headers: {
            "Content-Type":'multipart/form-data'
          }})
    },
    update(data){
        const url = '/api/user';
        return axiosClient.put(url, data);
    },
    get(){
        const url = '/api/user/profile';
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/api/user/${id}`;
        return axiosClient.delete(url);
    },

    getProfile(){
        const url = '/api/user/profile';
        return axiosClient.get(url);
    },
    changePwd(data){
        const url = '/api/user/changepwd';
        return axiosClient.post(url, data)
    }

};

export default userApi;