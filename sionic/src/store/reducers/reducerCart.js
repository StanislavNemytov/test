import { ADD_PRODUCT } from "../actions/actionsTypes";

export function reducerCart(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.cartProduct],
      };
    default:
      return state;
  }
}
