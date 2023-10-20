import React, { useEffect } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/Logo.png';
import logo_wecode from '../../images/logo_wecode.png';
import ThreadList from '../Thread-list/Thread-list';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('./main');
  };
  const goToList = () => {
    navigate('/Thread-list');
  };
  //////////////////////////////////////////////////////////////////
  const [userEmail, setUserEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');

  useEffect(() => {}, []);

  const loginFetch = () => {
    fetch('http://10.58.52.202:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPwd,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log(data.token);
          alert('로그인 성공');
          goToList();
        } else if (data.message === 'INVALIDU_USER_ID') {
          alert('아이디 혹은 비밀번호를 확인 해 주세요');
        }
      });
  };
  //////////////////////////////////////////////////////////////////
  return (
    <div className="login">
      <div className="logopage">
        <img src={logo} alt="firstLogo" />
        <img src={logo_wecode} alt="secondLogo" />
      </div>

      <div className="input_text">
        <input
          onChange={(event) => setUserEmail(event.target.value)}
          className="email"
          type="text"
          placeholder="이메일"
        />
        <input
          onChange={(event) => setUserPwd(event.target.value)}
          className="pw"
          type="text"
          placeholder="비밀번호"
        />
      </div>

      <button onClick={loginFetch} type="button" className="loginbutton">
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
