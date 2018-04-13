export const AppTypeKeys = {
  SET_CART_FROM_STORAGE: 'SET_CART_FROM_STORAGE',
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET'
}

const actions = {
  setCartFromStorage: (bookIds) => {
    return (dispatch) => {
      dispatch({
        type: AppTypeKeys.SET_CART_FROM_STORAGE,
        payload: bookIds,
      });
    };
  },
  addToCart: (bookData) => {
    return (dispatch) => {
      let storedBooks = localStorage.getItem('bookstore_bookids');
      storedBooks = storedBooks ? JSON.parse(storedBooks) : [];

      const isBookAlreadyAdded = storedBooks.some(storedBook => storedBook.id === bookData.id);
      if (!isBookAlreadyAdded) {
        storedBooks.push(bookData);
        localStorage.setItem('bookstore_bookids', JSON.stringify(storedBooks));
      }

      dispatch({
        type: AppTypeKeys.ADD_TO_BASKET,
        payload: bookData,
      });
    };
  },
  removeFromCart: (bookId) => {
    return (dispatch) => {
      let storedBooks = localStorage.getItem('bookstore_bookids');
      storedBooks = storedBooks ? JSON.parse(storedBooks) : [];
      const storedIndex = storedBooks.findIndex(book => book.id === bookId);
      if (storedIndex > -1) {
        storedBooks.splice(storedIndex, 1);
        localStorage.setItem('bookstore_bookids', JSON.stringify(storedBooks));
      }

      dispatch({
        type: AppTypeKeys.REMOVE_FROM_BASKET,
        payload: bookId,
      });
    };
  }
};

export default actions;
