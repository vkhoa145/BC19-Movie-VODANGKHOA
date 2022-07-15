import React from 'react'
import { useForm } from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../slices/authSlice'
import {Navigate} from 'react-router-dom';



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode:"onTouched"

  });
  const dispatch = useDispatch();
  const {user,isLoading, error} = useSelector(state => state.auth)

  const onSubmit = values => {
    console.log(values);
    dispatch(login(values));
  };
  const onError = error => {
    console.log(error)
  };
  if  (user) {
    // nếu người dùng là quản trị thì return về trang admin 
    if (user.maLoaiNguoiDung === 'QuanTri') {
      return <Navigate to="/admin/movies"/>
    };
    // Redirect user ve trang home
    return <Navigate to="/"/>
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label>Tài Khoản</label>
          <input type="text" {...register('taiKhoan', {
            required: {
              value: true,
              message: "Tài khoản không được để trống"
            },
            minLength :{
              value: 5,
              message: "Tài khoản phải có từ 5 tới 20 kí tự "
            },
            maxLength:{
              value: 20,
              message: "Tài khoản phải có từ 5 tới 20 kí tự "
            },
            
          })} />
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div>
          <label>Mật Khẩu</label>
          <input type="password" {...register('matKhau', {
            required: {
              value: true,
              message: "Mật khẩu không được để trống"
            },
            pattern : {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Mật khẩu không đúng định dạng"
            }
          })} />
          {errors.matKhau && <span>{errors.matKhau.message}</span>}
        </div>
        <button disabled={isLoading}>Đăng Nhập</button>
        {/* {error && <p>{error}</p>} */}
      </form>
    </div>
  )
}

export default Login