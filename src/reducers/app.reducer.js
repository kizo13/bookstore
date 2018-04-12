import { AppTypeKeys } from 'actions/app.actions';

const initialLoggedInUser = {
  cart: []
};

const appReducer = (state = initialLoggedInUser, action) => {
  switch (action.type) {
    case AppTypeKeys.ADD_TO_BASKET:
      if (state.cart.indexOf(action.payload) === -1) {
        return Object.assign({}, state, { cart: [...state.cart, action.payload] });
      }
      return state

    case AppTypeKeys.REMOVE_FROM_BASKET:
      const itemIndex = state.cart.indexOf(action.payload);
      if (itemIndex > -1) {
        state.cart.splice(itemIndex, 1);
      }

      return Object.assign({}, state, { cart: state.cart });

    default:
      return state;
  }
};

export default appReducer;
