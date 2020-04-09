import React from 'react';
import Alert from '../Alert/Alert';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';
import AsyncPosts from '../AsyncPosts/AsyncPosts';

function Content() {
  return (
    <div className="container pt-3 pb-3">
      <div className="row">
        <div className="col">
          <Alert />
          <PostForm />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <h2>Синхронные Посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Ассинхронные Посты</h2>
          <AsyncPosts />
        </div>
      </div>
    </div>
  );
}

export default Content;
