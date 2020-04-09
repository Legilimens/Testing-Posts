/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../store/app/actions';
import { createPost } from '../../store/post/actions';

function PostForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    if (!title.trim()) {
      dispatch(showAlert('Название поста не может быть пустым'));
      return;
    }
    const newPost = { id: Date.now().toString(), title };
    dispatch(createPost(newPost));
    setTitle('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-success" type="submit">Создать</button>
    </form>
  );
}

export default PostForm;
