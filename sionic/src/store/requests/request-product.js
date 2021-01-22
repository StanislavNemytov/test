import { httpRequests } from "../../api/api";
import { actions } from "../actions/actions";

export const getProducts = () => async (dispatch) => {
  const response = await httpRequests.getProducts();
  dispatch(actions.getProducts(response));
};

export const getProduct = () => async (dispatch) => {
  const response = await httpRequests.getProduct();
  dispatch(actions.getProduct(response));
};

export const getImages = (id) => async (dispatch) => {
  const response = await httpRequests.getImages(id);
  dispatch(actions.getImages(response));
};