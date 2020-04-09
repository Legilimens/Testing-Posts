import { CREATE_SYNC_POST, FETCH_POSTS } from '../types';

const initialState = {
  posts: [],
  asyncPosts: [],
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SYNC_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case FETCH_POSTS:
      return { ...state, asyncPosts: action.payload };
    default:
      return state;
  }
}

export default postsReducer;
