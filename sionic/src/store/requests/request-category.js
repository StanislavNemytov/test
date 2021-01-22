import { httpRequests } from "../../api/api";
import { actions } from "../actions/actions";

export const getCategories = () => async (dispatch) => {
  const response = await httpRequests.getCategories();
  dispatch(actions.getCategories(response));
};

export const getCategory = () => async (dispatch) => {
  const response = await httpRequests.getCategory();
  dispatch(actions.getCategory(response));
};
