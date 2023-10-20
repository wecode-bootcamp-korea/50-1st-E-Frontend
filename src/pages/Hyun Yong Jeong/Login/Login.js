import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
  const [userEmail, saveUserEmail] = useState('');
  const [userPassword, saveUserPassword] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const goSignup = () => {
    navigate('/Signup');
  };

  const isInputValid = userEmail.includes('@') && userPassword.length >= 5;

  const doFetch1 = () => {
    fetch('http://10.58.52.202:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('token', data.token);
          navigate('/threadPost');
        } else if (data.message === 'EMAIL_NOT_FOUND') {
          alert('가입되지 않은 이메일 입니다.');
          navigate('/');
        } else if (data.message === 'WRONG_PASSWORD') {
          alert('비밀번호가 틀렸습니다.');
          navigate('/');
        }
      });
  };
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
            onChange={(event) => saveUserEmail(event.target.value)}
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
            onClick={doFetch1}
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
