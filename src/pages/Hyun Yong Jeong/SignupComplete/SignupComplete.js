import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupComplete.scss';
import { useState } from 'react';

const SignupComplete = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  };
  const goSignup = () => {
    navigate('/Signup');
  };

  return (
    <>
      <div className="topleft">
        <span>&#60;</span>
        <button className="logbut" onClick={goSignup}>
          뒤로가기
        </button>
      </div>

      <div className="elements">
        <div className="check">
          <img alt="img" src="img/banner_square.png" />
        </div>

        <div>
          <div className="text1"> 회원 가입되었습니다! </div>
        </div>

        <div>
          <div className="text2"> 이제 로그인해주세요. </div>
        </div>
      </div>

      <div className="doneButton">
        <button className="backButton" onClick={goToLogin}>
          로그인
        </button>
      </div>
    </>
  );
};
export default SignupComplete;
