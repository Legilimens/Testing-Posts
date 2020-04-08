import {
  CREATE_SYNC_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT,
} from './types';

export const showAlert = (text) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: text,
  });
  setTimeout(() => {
    dispatch({
      type: HIDE_ALERT,
    });
  }, 3 * 1000);
};

export const createPost = (post) => (dispatch) => {
  dispatch({
    type: CREATE_SYNC_POST,
    payload: post,
  });
  // dispatch(showAlert('Запись добавлена'));
};

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

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
