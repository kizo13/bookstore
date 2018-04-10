import { AppTypeKeys } from 'actions/app.actions';

const initialLoggedInUser = {
  cart: []
};

const appReducer = (state = initialLoggedInUser, action) => {
  switch (action.type) {
    case AppTypeKeys.ADD_TO_BASKET:
      return Object.assign({}, state, { cart: [...state.cart, action.payload] });

    case AppTypeKeys.REMOVE_FROM_BASKET:
      const itemIndex = state.cart.indexOf(action.payload);
      const newCart = itemIndex === -1
        ? state.cart
        : state.cart.splice(itemIndex, 1);

      return Object.assign({}, state, { cart: newCart });

    default:
      return state;
  }
};

export default appReducer;
