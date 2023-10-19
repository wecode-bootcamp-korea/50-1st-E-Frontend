import React, { useEffect, useState } from 'react';
import './ThreadList.scss';
import { useNavigate } from 'react-router-dom';

const ThreadList = () => {
  const navigate = useNavigate();
  const goToPost = () => {
    navigate('/threadPost');
  };
  const [postList, setpostList] = useState([]);
  useEffect(() => {
    console.log('first');
    fetch('http://10.58.52.92:8000/threads/getAllThreads', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((userData) => setpostList(userData.data));
  }, []);

  return (
    <div className="thread">
      <div className="container">
        <div className="postList">
          <div className="post">
            <div className="header"></div>
            <div className="tbox">
              <div>
                {postList.map((post) => (
                  <div>
                    <span>{post.id}</span>
                    <img src={post.profile_image} />
                    <div>{post.content}</div>
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
