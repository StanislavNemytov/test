import { actionsDelForm } from "./actions/actionsDelForm";

export const changeInput = (data) => (dispatch) => {
  dispatch(actionsDelForm.changeInput(data));
};

export const saveOrder = (productsInCart) => (dispatch) => {
  dispatch(actionsDelForm.saveOrder(productsInCart));
};
