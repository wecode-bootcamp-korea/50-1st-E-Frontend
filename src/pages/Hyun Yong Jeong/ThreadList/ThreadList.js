import React, { useEffect, useState } from 'react';
import './ThreadList.scss';
import { useNavigate } from 'react-router-dom';

const ThreadList = () => {
  const navigate = useNavigate();
  const goToPost = () => {
    navigate('/threadPost');
  };
  const goToEdit = () => {
    navigate('/threadEdit');
  };

  const [postList, setpostList] = useState([]);
  useEffect(() => {
    console.log('first');
    fetch(`http://10.58.52.202:8000/threads/all`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((userData) => setpostList(userData));
  }, []);

  // const handleDelete = (id) => {
  //   fetch(`$`);
  // };

  return (
    <div className="thread">
      <div className="container">
        {postList.map((post) => (
          <div className="postList">
            <div className="post">
              <button type="button" className="editbutton" onClick={goToEdit}>
                수정하기
              </button>
              <div className="header">
                <img className="propic" src={post.profile_pic} />,
                <div>{post.nickname}</div>
              </div>
              <div className="tbox">{post.content}</div>
            </div>

            {/* <button type="button" className="updatebtn" onClick={goToPost}>
                글쓰기
              </button> */}
          </div>
        ))}
        <div className="action">
          <button type="button" className="updatebtn" onClick={goToPost}>
            글쓰기
          </button>
        </div>
        ;<footer></footer>
      </div>
    </div>
  );
};
export default ThreadList;
