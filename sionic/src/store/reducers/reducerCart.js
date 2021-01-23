import {
  ADD_PRODUCT,
  REMOVE_ALL_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
} from "../actions/actionsTypes";

const initialState = { cartCount: 0, cartProducts: [] };

export function reducerCart(state = initialState, action) {
  let newCartProducts = JSON.parse(JSON.stringify(state.cartProducts));
  let product;

  const removeProduct = () => {
    let index;
    newCartProducts.every((product, i) => {
      if (product.id === action.id) {
        index = i;
        return false;
      }
      return true;
    });
    newCartProducts.splice(index, 1);
  };

  switch (action.type) {
    case ADD_PRODUCT:
      if (newCartProducts.length) {
        product = newCartProducts.find((product) => product.id === action.id);
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

    case REMOVE_PRODUCT:
      if (newCartProducts.length) {
        product = newCartProducts.find((products) => products.id === action.id);
      }

      if (product.count === 1) {
        removeProduct();
      } else {
        product.count -= 1;
      }

      return {
        ...state,
        cartCount: Number(state.cartCount - 1),
        cartProducts: newCartProducts,
      };

    case REMOVE_ALL_PRODUCTS:
      return JSON.parse(JSON.stringify(initialState));

    case REMOVE_ALL_PRODUCT:
      product = newCartProducts.find((products) => products.id === action.id);
      let newCartCount = Number(state.cartCount - product.count);
      removeProduct();

      return {
        ...state,
        cartCount: newCartCount,
        cartProducts: newCartProducts,
      };

    default:
      return state;
  }
}
