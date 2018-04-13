import { AppTypeKeys } from 'actions/app.actions';

const initialLoggedInUser = {
  cart: []
};

const appReducer = (state = initialLoggedInUser, action) => {
  switch (action.type) {
    case AppTypeKeys.SET_CART_FROM_STORAGE:
      return Object.assign({}, state, { cart: action.payload });

    case AppTypeKeys.ADD_TO_BASKET:
      if (state.cart.some(book => book.id === action.payload.id)) {
        return state;
      }
      return Object.assign({}, state, { cart: [...state.cart, action.payload] });

    case AppTypeKeys.REMOVE_FROM_BASKET:
      const itemIndex = state.cart.findIndex(book => book.id === action.payload);
      if (itemIndex > -1) {
        state.cart.splice(itemIndex, 1);
      }

      return Object.assign({}, state, { cart: state.cart });

    default:
      return state;
  }
};

export default appReducer;
