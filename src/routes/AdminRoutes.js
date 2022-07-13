import React from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


// Component dùng để xử lý kiểm tra xem user có hợp lệ không 
// nếu là admin thì mới cho phép truy cập 
// nếu không phải là admin sẽ redirect về 1 trang nào đó 

const AdminRoute = ({children}) => {
    // thực hiện kiểm tra logic rồi mới return lại route
    // B1: kết nối tới redux store để lấy thông tin user 
    const {user} = useSelector(state => state.auth)
    // B2: kiểm tra xem user có phải là admin hay không
    if(!user || user.maLoaiNguoiDung !== 'QuanTri') {
        // chưa đăng nhập hoặc user không phải là admin 
        // => Redirect về page not found 
        return <Navigate to="/not-found"/>

    };
  return children;
    
  
}

export default AdminRoute;