import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';

function Posts() {
  const syncPposts = useSelector((store) => store.posts.posts);

  if (!syncPposts.length) {
    return <p>Постов пока нет. Будьте первым, добавьте что-нибудь!</p>;
  }

  return syncPposts.map((post) => <Post key={post.id} post={post} />);
}

export default Posts;
