import { ADD_PRODUCT } from "../actions/actionsTypes";

const initialState = { cartCount: 0, cartProducts: [] };

export function reducerCart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let product;
      if (state.cartProducts) {
        product = state.cartProducts.find(
          (products) => products.id === action.id
        );
      }

      product = { id: action.id, count: 1 };

      return {
        ...state,
        cartCount: Number(state.cartCount + 1),
        cartProducts: [...state.cartProducts, { ...product }],
      };

    default:
      return state;
  }
}
