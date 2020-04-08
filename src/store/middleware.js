import { CREATE_SYNC_POST } from './types';
import { showAlert } from './actions';

const forbiden = ['fuck', 'spam', 'php'];

function forbidenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_SYNC_POST) {
        const found = forbiden.filter((word) => action.payload.title.includes(word));
        if (found.length) {
          return dispatch(showAlert('Вы кто такие? Я вас не звал, идите домой!'));
        }
      }
      return next(action);
    };
  };
}

export default forbidenWordsMiddleware;
