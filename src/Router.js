import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ThreadList from './pages/Thread-list/Thread-list';
import ThreadPost from './pages/Thread-post/Thread-post';
//import ThreadEdit from './pages/Thread-post/Thread-edit';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Thread-list" element={<ThreadList />} />
        <Route path="/Thread-post" element={<ThreadPost />} />
        {/* <Route path="/Thread-edit" element={<ThreadEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
