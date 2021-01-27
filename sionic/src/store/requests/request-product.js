import { httpRequests } from "../../api/api";
import { actions } from "../actions/actions";

export const getProducts = (range, categoryId) => async (dispatch) => {
  const response = await httpRequests.getProducts(range, categoryId);
  dispatch(actions.getProducts(response));
};

export const getNextProducts = (range, categoryId) => async (dispatch) => {
  const response = await httpRequests.getProducts(range, categoryId);
  dispatch(actions.getNextProducts(response));
};

export const getProductsByCategoryId = (id) => async (dispatch) => {
  const response = await httpRequests.getProductsByCategoryId(id);
  dispatch(actions.getProductsByCategoryId(response, id));
};

export const getProduct = (id) => async (dispatch) => {
  const response = await httpRequests.getProduct(id);
  dispatch(actions.getProduct(response));
};

export const getImages = (id) => async (dispatch) => {
  const response = await httpRequests.getImages(id);
  dispatch(actions.getImages(response));
};

export const removeCategoryId = () => async (dispatch) => {
  dispatch(actions.removeCategoryId());
};
