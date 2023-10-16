import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
      <div className="topleft">
        <span>&#60;</span>
        <button className="logbut" onClick={goToLogin}>
          뒤로가기
        </button>
      </div>
      <h1 />
      <h2>회원가입</h2>
      <div>
        <span>기본정보</span>
        <span className="goleft" id="must">
          필수사항
        </span>
      </div>
      <div className="info">
        <div className="inputwrap">
          {' '}
          <input type="email" placeholder="이메일" />{' '}
        </div>
        <div className="inputwrap">
          {' '}
          <input type="password" placeholder="비밀번호" />{' '}
        </div>
        <div className="inputwrap">
          {' '}
          <input type="passwordcheck" placeholder="비밀번호확인" />{' '}
        </div>
      </div>
      <div>
        <span>닉네임과 프로필 이미지</span>
        <span className="goleft">선택사항</span>
      </div>
      <div className="info">
        <div className="inputwrap">
          {' '}
          <input type="nickname" placeholder="닉네임" />{' '}
        </div>
      </div>
      <div>
        <span>전화번호</span>
        <span className="goleft">선택사항</span>
      </div>
      <div className="info">
        <div className="phone">
          <div className="item">
            <select className="num">
              <option>010</option>
              <option>011</option>
              <option>070</option>
              <option>02</option>
            </select>
          </div>
          <div className="item">
            <div classname="inputwrap">
              <input type="phone" placeholder="휴대폰 번호를 입력해주세요" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span>생일</span>
        <span className="goleft">선택사항</span>
      </div>
      <div className="info">
        <div className="dob">
          <select className="year">
            <option>1995</option>
            <option>1996</option>
            <option>1997</option>
            <option>1998</option>
            <option>1999</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
          </select>
          <select className="month">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select className="day">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
      </div>
      <button className="button2"> 회원 가입 </button>{' '}
    </>
  );
};

export default Signup;
