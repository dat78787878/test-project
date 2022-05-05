import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { postData } from '../../redux/register/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {
  const initvalues = {
    username: '',
    password: '',
    rePassword: '',
  };
  const notifyS = () => toast.success('Success');
  const [initData, setInitData] = useState(initvalues);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initData,
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required!')
        .min(4, 'Mininum 4 characters')
        .max(255, 'Maximum 255 characters'),
      password: Yup.string()
        .required('Required!')
        .min(4, 'Mininum 4 characters')
        .max(255, 'Maximum 255 characters'),
      rePassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    }),
    onSubmit: (values) => {
      const user = {
        username: values.username,
        password: values.password,
      };
      dispatch(postData(user));
      notifyS();
      setInitData(initvalues);
    },
  });
  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-container-wrapper">
        <div className="title">REGISTER</div>
        <form onSubmit={formik.handleSubmit}>
          <input
            className={formik.errors.username && formik.touched.username ? 'error-input' : ''}
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
          ></input>
          {formik.touched.username && formik.errors.username && <p>{formik.errors.username}</p>}
          <input
            className={formik.errors.password && formik.touched.password ? 'error-input' : ''}
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          ></input>
          {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
          <input
            className={formik.errors.rePassword && formik.touched.rePassword ? 'error-input' : ''}
            placeholder="Enter the password"
            type="password"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            name="rePassword"
          ></input>
          {formik.touched.rePassword && formik.errors.rePassword && (
            <p>{formik.errors.rePassword}</p>
          )}
          <div className="flex text-end">
            <Link to="/login">
              <Button variant="success" className="me-3">
                LOGIN
              </Button>
            </Link>
            <Button variant="success" type="submit">
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
