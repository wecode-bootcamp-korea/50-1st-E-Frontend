import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThreadEdit = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/Thread-list');
  };
  const token = localStorage.getItem('token');
  const [inputEdit, setInputEdit] = useState('');
  const sendMyTrhead = () => {
    fetch('http://10.58.52.202:8000/threads/change/' + `${postid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        content: inputEdit,
      }),
    });
  };

  goToList();

  const ThreadEedit = () => {
    return (
      <div>
        <input
          defaultValue={content}
          className="box"
          type="text"
          onChange={(event) => setInputEdit(event.target.value)}
        />

        <button
          className="button-post"
          onClick={() => {
            sendMyTrhead();
          }}
        >
          Edit
        </button>
      </div>
    );
  };
};

export default ThreadEdit;
