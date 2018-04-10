import apiActions from './api.actions';

export const FormTypeKeys = {
  CHANGE_FORM: 'CHANGE_FORM',
  RESET_FORM: 'RESET_FORM',
}

const actions = {
  changeForm: (change) => {
    return (dispatch) => {
      dispatch({
        type: FormTypeKeys.CHANGE_FORM,
        payload: change
      });

      if (change.length > 2) {
        dispatch(apiActions.getBooks(change));
      }
    };
  },

  resetForm: () => {
    return (dispatch) => {
      dispatch({
        type: FormTypeKeys.RESET_FORM,
        payload: null
      });
    };
  }
};

export default actions;
