import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../Post/Post';
import { fetchPosts } from '../../store/actions';
import Loader from '../Loader/Loader';

function AsyncPosts() {
  const asyncPosts = useSelector((store) => store.posts.asyncPosts);
  const loading = useSelector((store) => store.app.loading);
  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }

  if (!asyncPosts.length) {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    );
  }

  return asyncPosts.map((post) => <Post key={post.id} post={post} />);
}

export default AsyncPosts;
