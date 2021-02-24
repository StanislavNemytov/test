import { CHANGE_INPUT, GET_HISTORY, SAVE_DATA } from "./actionsDelFormTypes";

export const actionsDelForm = {
  changeInput: ({ name, value }) => ({
    type: CHANGE_INPUT,
    name,
    value,
  }),

  saveOrder: (productsInCart) => ({
    type: SAVE_DATA,
    productsInCart,
  }),

  getHistory: (history) => ({
    type: GET_HISTORY,
    history,
  }),
};
