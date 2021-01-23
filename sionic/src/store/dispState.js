import { actions } from "./actions/actions";

export const addProduct = (id) => (dispatch) => {
  dispatch(actions.addProduct(id));
};

export const removeProduct = (id) => (dispatch) => {
  dispatch(actions.removeProduct(id));
};

export const removeAllProducts = (id) => (dispatch) => {
  dispatch(actions.removeAllProducts(id));
};

export const removeAllProduct = (id) => (dispatch) => {
  dispatch(actions.removeAllProduct(id));
};
