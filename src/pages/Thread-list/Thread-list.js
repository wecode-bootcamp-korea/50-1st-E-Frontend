import React, { useEffect, useState } from 'react';
import './Thread-list.scss';
import { useNavigate } from 'react-router-dom';

const ThreadList = () => {
  const nowDate = new Date();
  console.log(nowDate.toLocaleString());
  const navigate = useNavigate();
  const goToPost = () => {
    navigate('/Thread-post');
  };
  const goToEdit = () => {
    navigate('/Thread-edit');
  };
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    console.log('first');
    fetch('http://10.58.52.202:8000/threads/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => setPostList(result));
  }, []);
  console.log(postList);
  return (
    <div className="thread">
      <div className="container">
        <div className="postList">
          <div className="post">
            <div className="header"></div>
            <div className="tbox">
              <div>
                {postList.map((post, inx) => (
                  <div key={inx}>
                    <span>{post.postId}</span>
                    <img src={post.profileImage} />
                    <div>{post.content}</div>
                    <div>
                      <button
                        type="button"
                        className="updatebtn"
                        onClick={goToEdit}
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer>
          <button type="button" className="updatebtn" onClick={goToPost}>
            POST
          </button>
        </footer>
      </div>
    </div>
  );
};
export default ThreadList;
