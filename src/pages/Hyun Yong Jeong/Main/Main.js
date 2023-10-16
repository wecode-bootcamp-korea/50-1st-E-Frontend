import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button classname="word"> 메인 화면 </button>
      </div>
    </>
  );
};

export default Main;
