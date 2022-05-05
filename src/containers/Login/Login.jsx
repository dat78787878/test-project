import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { postData } from '../../redux/login/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  const initvalues = {
    username: '',
    password: '',
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
    }),
    onSubmit: (values) => {
      const user = { username: values.username, password: values.password };
      dispatch(postData(user));
      setInitData(initvalues);
      notifyS();
    },
  });
  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-container-wrapper">
        <div className="title">LOGIN</div>
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
          <div className="flex text-end">
            <Link to="/register">
              <Button variant="success" className="me-3">
                REGISTER
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

export default Login;
