Bổ sung những kiến thức cần thiết sau:
- router
    npm install react-router-dom
    setup router: 
    - index.js
    - import {BrowserRouter} from 'react-router-dom';
    <!-- -  <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter> -->
    
        </React.StrictMode>
    - 



PROJECT STRUCTURE
- src:
    - components
        + Chỉ chứa những component nhận vào props và render UI
        + Thường sẽ không có xử lý logi ở những component này 
        + Button, Card, Modal, Header, Text,..
        + Có thể tái sử dụng
    - modules
        + nơi chứa những component chính cho ứng dụng 
        + Nơi có xử lý logic: call API, xử lí nghiệp vụ 
        + có thể là 1 page, hoặc tập hợp nhiều page
        - Home (module)
            - components: chỉ chứa các component được sử dụng trực tiếp trong chính module này. Có thể xử lý logic
            - pages: components sẽ render trực tiếp với router
        - Auth:
            + Đăng nhập và đăng kí 
    - apis/services
        + setup thư viện gọi API (axios) 
        + định nghĩa các function gọi API
        + axiosClient: setup cấu hình mặc định API
        + movie.js: định nghĩa các function gọi API liên quan đến movie 
