import React, { useEffect, useState } from 'react';
import './ThreadList.scss';
import { useNavigate } from 'react-router-dom';

const ThreadList = () => {
  const navigate = useNavigate();
  const goToPost = () => {
    navigate('/threadPost');
  };
  const [postList, setpostList] = useState([]);
  // useEffect(() => {
  //   console.log('first');
  //   fetch('http://10.58.52.92:8000/threads/getAllThreads', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((userData) => setpostList(userData.data));
  // }, []);

  return (
    <div className="thread">
      <div className="container">
        {/* {postList.map((post) => ( */}
        <div className="postList">
          <div className="post">
            <div className="header">
              {/* {post.profile_pic},{post.nickname} */}
            </div>
            <div className="tbox">
              {/* {post.content} */}
              "일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
              사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
              믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
              ELIZA의 이름을 따서 명명되었다."
            </div>
          </div>
          <div className="action">
            <button type="button" className="updatebtn" onClick={goToPost}>
              글쓰기
            </button>
          </div>
        </div>
        ))} ;<footer></footer>
      </div>
    </div>
  );
};
export default ThreadList;
