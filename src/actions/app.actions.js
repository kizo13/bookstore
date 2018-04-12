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
  addToCart: (bookId) => {
    return (dispatch) => {
      let storedBookIds = localStorage.getItem('bookstore_bookids');
      storedBookIds = storedBookIds ? JSON.parse(storedBookIds) : [];
      storedBookIds.push(bookId);
      localStorage.setItem('bookstore_bookids', JSON.stringify(storedBookIds));

      dispatch({
        type: AppTypeKeys.ADD_TO_BASKET,
        payload: bookId,
      });
    };
  },
  removeFromCart: (bookId) => {
    return (dispatch) => {
      let storedBookIds = localStorage.getItem('bookstore_bookids');
      storedBookIds = storedBookIds ? JSON.parse(storedBookIds) : [];
      const storedIndex = storedBookIds.indexOf(bookId);
      if (storedIndex > -1) {
        storedBookIds.splice(storedIndex, 1);
        localStorage.setItem('bookstore_bookids', JSON.stringify(storedBookIds));
      }

      dispatch({
        type: AppTypeKeys.REMOVE_FROM_BASKET,
        payload: bookId,
      });
    };
  }
};

export default actions;
