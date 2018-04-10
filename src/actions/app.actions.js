export const AppTypeKeys = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET'
}

const actions = {
  addToCart: (bookId) => {
    return (dispatch) => {
      // TODO: add to localstorage
      dispatch({
        type: AppTypeKeys.ADD_TO_BASKET,
        payload: bookId,
      });
    };
  },
  removeFromCart: (bookId) => {
    return (dispatch) => {
      dispatch({
        type: AppTypeKeys.REMOVE_FROM_BASKET,
        payload: bookId,
      });
    };
  }
};

export default actions;
