import { combineReducers } from 'redux';
import { ApiTypeKeys } from '../actions/api.actions';

const initialApiState = {
  autocomplete: {
    isLoading: false,
    data: null
  },
  books: {
    isLoading: false,
    data: null
  }
};

const autocomplete = (state = initialApiState.autocomplete, action) => {
  switch (action.type) {
    case ApiTypeKeys.FETCH_BOOKS:
      return Object.assign({}, state, { data: action.payload });

    case ApiTypeKeys.FETCH_BOOKS_ISLOADING:
      return Object.assign({}, state, { isLoading: action.payload });

    default:
      return state;
  }
};

const books = (state = initialApiState.books, action) => {
  switch (action.type) {
    case ApiTypeKeys.FETCH_BOOK_BY_ID:
      return Object.assign({}, state, { data: action.payload });

    case ApiTypeKeys.FETCH_BOOK_BY_ID_ISLOADING:
      return Object.assign({}, state, { isLoading: action.payload });

    default:
      return state;
  }
};

const apiReducer = combineReducers({
  autocomplete,
  books,
});

export default apiReducer;
