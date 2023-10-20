import React from 'react';
import './Main.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  /////////////////////////////////////////////////////////////////
  const [userEmail, setUserEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const doFetch = () => {
    fetch('http://10.58.52.94:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPwd,
      }),
    })
      .then((res) => {
        const result = res.json();
        console.log(result);
      })
      .then((data) => console.log(data));
  };
  /////////////////////////////////////////////////////////////////
  return (
    <div className="main">
      <button className="back" type="button" onClick={goToLogin}>
        {' '}
        &lt; &nbsp;&nbsp;뒤로
      </button>
      <h2>회원가입</h2>
      <div className="basic">
        <div className="information">기본정보</div>
        <div className="required">필수 사항</div>
      </div>
      <div className="input_main">
        <input
          onChange={(event) => setUserEmail(event.target.value)}
          type="text"
          placeholder="이메일"
        ></input>
        <input
          onChange={(event) => setUserPwd(event.target.value)}
          type="text"
          placeholder="비밀번호"
        ></input>
        <input type="text" placeholder="비밀번호 확인"></input>
      </div>
      <div className="profileimage">
        <span className="profileimg">닉네임과 프로필 이미지</span>
        <span className="choose">선택 사항</span>
      </div>
      <input className="maininput" type="text" placeholder="닉네임"></input>
      <div className="telnum">
        <span className="phonenum">전화번호</span>
        <span className="choose">선택 사항</span>
      </div>
      <div className="typephone">
        <select className="startnum">
          <option>010</option>
        </select>
        <input
          className="pushnum"
          type="tel"
          placeholder="휴대폰 번호를 입력해주세요"
        ></input>
      </div>
      <div className="hbd">
        <span className="birth">생일</span>
        <span className="choose">선택 사항</span>
      </div>
      <div className="birthyear">
        <select className="year">
          <option>1998년</option>
        </select>
        <select className="month">
          <option>1월</option>
        </select>
        <select className="day">
          <option>1일</option>
        </select>
      </div>
      <button onClick={doFetch} className="signup" type="button">
        회원 가입
      </button>
    </div>
  );
};
export default Main;
