import axios from 'axios';

const axiosResponse = axios.create({
    baseURL: 'https://burger-group-5.firebaseio.com/'
});

axiosResponse.interceptors.request.use(req => {
    return req;
});

axiosResponse.interceptors.response.use(res => {
    return res;
});

export default axiosResponse;