import React from 'react';
import PostForm from './components/PostForm/PostForm';
import AsyncPosts from './components/AsyncPosts/AsyncPosts';
import Posts from './components/Posts/Posts';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="container pt-3">
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

export default App;
