import { serverRequests } from "../api/apiServer";
import { actionsDelForm } from "./actions/actionsDelForm";

export const changeInput = (data) => (dispatch) => {
  dispatch(actionsDelForm.changeInput(data));
};

export const saveOrder = (productsInCart) => (dispatch) => {
  dispatch(actionsDelForm.saveOrder(productsInCart));
};

export const getHistory = () => async (dispatch) => {
  const response = await serverRequests.getHistoryOfOrders();
  dispatch(actionsDelForm.getHistory(response));
};
