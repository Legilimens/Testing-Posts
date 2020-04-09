import { combineReducers } from 'redux';
import postsReducer from './post/reducers';
import appReducer from './app/reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});

export default rootReducer;
