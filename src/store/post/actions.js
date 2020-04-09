import {
  CREATE_SYNC_POST, FETCH_POSTS,
} from '../types';
import { showAlert, showLoader, hideLoader } from '../app/actions';

export const createPost = (post) => (dispatch) => {
  dispatch({
    type: CREATE_SYNC_POST,
    payload: post,
  });
  // dispatch(showAlert('Запись добавлена'));
};

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await res.json();
    dispatch({
      type: FETCH_POSTS,
      payload: json,
    });
    dispatch(hideLoader());
  } catch (e) {
    dispatch(showAlert('Ошибка загрузки данных!'));
    dispatch(hideLoader());
  }
};
