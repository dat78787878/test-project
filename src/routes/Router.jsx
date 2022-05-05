import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from '../App.js';
import Home from '../containers/Home/Home.jsx';
import Login from '../containers/Login/Login.jsx';
import Register from '../containers/Register/Register.jsx';
const Router = () => {
  const { user} = useSelector((state) => state.login);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<App />}></Route>
        <Route path="/login" element={user ? <Navigate to="/todo" /> : <Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={user ? <Navigate to="/todo" /> : <Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
