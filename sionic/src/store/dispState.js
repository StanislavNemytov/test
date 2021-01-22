import { actions } from "./actions/actions";

export const addProduct = (id) => (dispatch) => {
  dispatch(actions.addProduct(id));
};
