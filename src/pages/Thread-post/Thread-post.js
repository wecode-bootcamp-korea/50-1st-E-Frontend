import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThreadPost = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/Thread-list');
  };
  const token = localStorage.getItem('token');
  const [inputValue, setInputValue] = useState('');
  const sendMyTrhead = () => {
    fetch('http://10.58.52.202:8000/threads/addpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        content: inputValue,
      }),
    });

    goToList();
  };
  return (
    <div>
      <input
        className="box"
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="button-post"
        onClick={() => {
          sendMyTrhead();
        }}
      >
        POST
      </button>
    </div>
  );
};

export default ThreadPost;
