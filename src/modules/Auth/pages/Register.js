import React from 'react'
import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {register as registerAction} from '../slices/authSlice'
const Register = () => {
  
  const validationSchema = yup.object({
    taiKhoan: yup
      .string()
      .required("Tài khoản không được để trống")
      .min(5,"Tài khoản phải từ 5 tới 20 kí tự ")
      .max(20,"Tài khoản phải từ 5 tới 20 kí tự "),
    matKhau: yup
      .string()
      .required("Mật khẩu không được để trống")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Mật khẩu không đúng định dạng"),
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    hoTen: yup
      .string()
      .required("Họ tên không được để trống"),
    soDt: yup
      .string()
      .required("Số điẹn thoại không được để trống")
      
  });
  const { register, handleSubmit,formState:{errors} } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(validationSchema),
    mode:"onTouched",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = values => {
    dispatch(registerAction(values)).then(()=>{
      // Sau khi action thanh cong 
      // redirect ve login page
      navigate('/login')
    })
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tài Khoản</label>
          <input type="text" {...register('taiKhoan')} />
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div>
          <label>Mật Khẩu</label>
          <input type="password" {...register('matKhau')} />
          {errors.matKhau && <span>{errors.matKhau.message}</span>}

        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}

        </div>
        <div>
          <label>Họ và Tên</label>
          <input type="text" {...register('hoTen')} />
          {errors.hoTen && <span>{errors.hoTen.message}</span>}

        </div>
        <div>
          <label>Số Điện Thoại</label>
          <input type="text" {...register('soDt')} />
          {errors.soDt && <span>{errors.soDt.message}</span>}

        </div>
        <button>Đăng Kí</button>
      </form>
    </div>
  )
}

export default Register