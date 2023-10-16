import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Hyun Yong Jeong/Login/Login';
import Main from './pages/Hyun Yong Jeong/Main/Main';
import Signup from './pages/Hyun Yong Jeong/Signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
