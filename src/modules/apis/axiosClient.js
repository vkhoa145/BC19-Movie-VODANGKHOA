import axios from 'axios';
import store from '../../store'
// Setup default configuration for axios
const axiosClient = axios.create({
    //Setup default url
    baseURL: "https://movienew.cybersoft.edu.vn/api",
    // Setup TokenCyberSofr headers
    headers:{
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxOSIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTMzNDQwMDAwMCIsIm5iZiI6MTYzNzk0NjAwMCwiZXhwIjoxNjY5NDgyMDAwfQ.TumAQWyBApm0qV2BOdFeXHmfMi9OQfvjTTG-Vs-cxf4"
    }
});

export default axiosClient;

// Axios response intersector 
axiosClient.interceptors.response.use(
    (response)=>{
        // format response trước khi trả ra cho nơi request
        return response.data.content;
    },
    (error) => {
        // Format error trước khi trả ra
        Promise.reject(error.response.data.content)
    },
);

// Axios request intersector 
axiosClient.interceptors.request.use(
    (config) => {
        // Thay đỏi config của request trước khi gửi lên server 
        // Connect to redux store
        const {user} = store.getState().auth;
        // Kiểm tra nếu có thông tin user => đã đăng nhập => Lấy key accessToken từ user và gán cho authorazation của request headers
        if(user) {
            const {accessToken} = user;
            config.headers.Authorization = `Bearer ${accessToken}`;
            
        };
        return config;
    }
);
