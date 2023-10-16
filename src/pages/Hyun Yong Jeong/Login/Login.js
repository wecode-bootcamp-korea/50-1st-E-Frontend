import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
  const [userId, saveUserId] = useState('');
  const [userPassword, saveUserPassword] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const goSignup = () => {
    navigate('/Signup');
  };

  const isInputValid = userId.includes('@') && userPassword.length >= 5;

  return (
    <>
      <div className="blank">
        <p>&nbsp;</p>
      </div>
      <div className="img1">
        <img alt="img" src="img/Logo.png" />
      </div>
      <div className="img2">
        <img alt="img" src="img/logo_wecode.png" />
      </div>
      <div className="login">
        <div className="inputwrap">
          <input
            onChange={(event) => saveUserId(event.target.value)}
            type="email"
            placeholder="이메일"
          />
        </div>
        <div className="inputwrap">
          <input
            onChange={(event) => saveUserPassword(event.target.value)}
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <div className="inputwrap">
          <button
            type="button"
            onClick={goToMain}
            className={isInputValid ? 'buttonLogin' : 'buttonLoginDisabled'}
            disabled={isInputValid ? false : true}
          >
            로그인
          </button>
        </div>
      </div>
      <div className="btag">
        <button className="logbut" onClick={goSignup}>
          회원가입
        </button>
        <div>|</div>
        <button className="logbut">비밀번호 찾기</button>
      </div>
    </>
  );
};

export default Login;
