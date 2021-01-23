import { ADD_PRODUCT } from "../actions/actionsTypes";

const initialState = { cartCount: 0, cartProducts: [] };

export function reducerCart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const newCartProducts = JSON.parse(JSON.stringify(state.cartProducts));

      let product;

      if (newCartProducts.length) {
        product = newCartProducts.find((products) => products.id === action.id);
      }

      if (product) {
        product.count += 1;
      } else {
        product = { id: action.id, count: 1 };
        newCartProducts.push(product);
      }

      return {
        ...state,
        cartCount: Number(state.cartCount + 1),
        cartProducts: newCartProducts,
      };

    default:
      return state;
  }
}
