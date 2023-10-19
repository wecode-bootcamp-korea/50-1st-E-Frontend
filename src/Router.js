import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Hyun Yong Jeong/Login/Login';
import Main from './pages/Hyun Yong Jeong/ThreadList/ThreadList';
import Signup from './pages/Hyun Yong Jeong/Signup/Signup';
import SignupComplete from './pages/Hyun Yong Jeong/SignupComplete/SignupComplete';
import ThreadList from './pages/Hyun Yong Jeong/ThreadList/ThreadList';
import ThreadPost from './pages/Hyun Yong Jeong/ThreadPost/ThreadPost';
import ThreadEdit from './pages/Hyun Yong Jeong/ThreadEdit/ThreadEdit';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupComplete" element={<SignupComplete />} />
        <Route path="/threadPost" element={<ThreadPost />} />
        <Route path="/threadList" element={<ThreadList />} />
        <Route path="/threadEdit" element={<ThreadEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
