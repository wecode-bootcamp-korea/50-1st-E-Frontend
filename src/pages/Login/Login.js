import React from 'react';
import logo from '../../images/Logo.png';
import logo_wecode from '../../images/logo_wecode.png';
// images 폴더의 위치 차이 (public, src)
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('./main');
  };
  return (
    <div className="login">
      <div className="logopage">
        <img src={logo} alt="firstLogo" />
        <img src={logo_wecode} alt="secondLogo" />
      </div>

      <div className="input_text">
        <input className="email" type="text" placeholder="이메일" />
        <input className="pw" type="text" placeholder="비밀번호" />
      </div>

      <button type="button" className="loginbutton">
        로그인
      </button>
      <div className="join2">
        <button className="join" type="button" onClick={goToMain}>
          회원가입
        </button>
        <hr></hr>
        <button className="password" type="button">
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default Login;
