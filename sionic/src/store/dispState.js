import { actions } from "./actions/actions";

export const addProduct = (id) => (dispatch) => {
  dispatch(actions.addProduct(id));
};

export const removeProduct = (id) => (dispatch) => {
  dispatch(actions.removeProduct(id));
};

export const removeAllProducts = () => (dispatch) => {
  dispatch(actions.removeAllProducts());
};

export const removeAllProduct = (id) => (dispatch) => {
  dispatch(actions.removeAllProduct(id));
};
