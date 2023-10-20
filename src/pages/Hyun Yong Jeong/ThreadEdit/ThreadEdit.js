import React, { useState } from 'react';
import './ThreadEdit.scss';
import { useNavigate } from 'react-router-dom';

const ThreadEdit = () => {
  const navigate = useNavigate();
  const goTolist = () => {
    navigate('/threadList');
  };

  const token = localStorage.getItem('token');

  const [editcontent, setEditcontent] = useState([]);

  const editcont = () => {
    fetch('http://10.58.52.92:8000/users/creatingPost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        content: editcontent,
        authorization: token,
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
    <div>
      <div className="container2">
        <div className="publish2">
          <div className="propic2">
            <img
              width={48}
              height={48}
              alt="profile"
              src="img/wecode_symbol_1.png"
            />
          </div>
          <div className="content2">
            <div className="username2">
              <div>사용자 ID</div>
            </div>

            <div className="textarea2">
              <div>
                <input
                  className="textinput2"
                  onChange={(event) => setEditcontent(event.target.value)}
                  type="posting"
                  placeholder="내용 수정하기"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="action3">
          <div>
            <button className="_button1" onClick={goTolist}>
              취소
            </button>
          </div>

          <div>
            <button className="_button2" onClick={editcont}>
              게시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadEdit;
