import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const ApiTypeKeys = {
  FETCH_BOOKS: 'FETCH_BOOKS',
  FETCH_BOOKS_ISLOADING: 'FETCH_BOOKS_ISLOADING',
  FETCH_BOOK_BY_ID: 'FETCH_BOOK_BY_ID',
  FETCH_BOOK_BY_ID_ISLOADING: 'FETCH_BOOK_BY_ID_ISLOADING'
}

const actions = {

  getBooks: (query) => {
    return (dispatch) => {
      dispatch({ type: ApiTypeKeys.FETCH_BOOKS_ISLOADING, payload: true });

      axios.get(`${API_URL}?q="${query}"`)
        .then(items => dispatch({ type: ApiTypeKeys.FETCH_BOOKS, payload: items.data }))
        .catch((err) => {
          console.info(err);
          dispatch({ type: ApiTypeKeys.FETCH_BOOKS, payload: null });
        })
        .then(() => dispatch({ type: ApiTypeKeys.FETCH_BOOKS_ISLOADING, payload: false }));
    };
  },

  getBookById: (bookId) => {
    return (dispatch) => {
      dispatch({ type: ApiTypeKeys.FETCH_BOOK_BY_ID_ISLOADING, payload: true });

      axios.get(`${API_URL}/${bookId}`)
        .then((items) => {
          if (items.data) {
            dispatch({ type: ApiTypeKeys.FETCH_BOOK_BY_ID, payload: items.data });
          }
        })
        .catch((err) => {
          console.info(err);
          dispatch({ type: ApiTypeKeys.FETCH_BOOK_BY_ID, payload: null });
        })
        .then(() => dispatch({ type: ApiTypeKeys.FETCH_BOOK_BY_ID_ISLOADING, payload: false }));
    };
  }
};

export default actions;
