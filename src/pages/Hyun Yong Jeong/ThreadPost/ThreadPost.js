import React, { useState } from 'react';
import './ThreadPost.scss';
import { useNavigate } from 'react-router-dom';

const ThreadPost = () => {
  const nowDate = new Date();
  const navigate = useNavigate();
  const goTolist = () => {
    navigate('./threadList');
  };

  const token = localStorage.getItem('token');

  const [postcontent, setPostcontent] = useState([]);

  const postcont = () => {
    fetch('http://10.58.52.92:8000/users/creatingPost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        content: postcontent,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert('성공입니다.');
        navigate('/threadList');
        console.log(result);
      });
  };

  return (
    <div className="container">
      <div className="publish">
        <div className="picbox">
          <div className="propic">
            <img alt="profile" src="img/wecode_symbol_1.png" />
          </div>
          <div className="content">
            <div className="username">
              <span>사용자 ID</span>
            </div>

            <div className="textarea">
              <div>
                <input
                  className="textinput"
                  onChange={(event) => setPostcontent(event.target.value)}
                  type="posting"
                  placeholder="스레드를 시작하세요"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action">
        <div className="">
          <button onClick={goTolist}>"취소"</button>
        </div>

        <div className="">
          <button onClick={postcont}>"게시"</button>
        </div>
      </div>
    </div>
  );
};

export default ThreadPost;
