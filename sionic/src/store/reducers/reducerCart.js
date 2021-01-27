import {
  ADD_PRODUCT,
  REMOVE_ALL_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
} from "../actions/actionsTypes";

const initialState = {
  cartCount: 0,
  cartProducts: [],
};

export function reducerCart(
  state = JSON.parse(localStorage.getItem("cart")) ||
    JSON.parse(JSON.stringify(initialState)),
  action
) {
  let newCartProducts = JSON.parse(JSON.stringify(state.cartProducts));
  let product;
  let newState;

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

      newState = {
        cartCount: Number(state.cartCount + 1),
        cartProducts: newCartProducts,
      };

      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case REMOVE_PRODUCT:
      if (newCartProducts.length) {
        product = newCartProducts.find((products) => products.id === action.id);
      }

      if (product.count === 1) {
        removeProduct();
      } else {
        product.count -= 1;
      }

      newState = {
        cartCount: Number(state.cartCount - 1),
        cartProducts: newCartProducts,
      };

      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case REMOVE_ALL_PRODUCTS:
      newState = JSON.parse(JSON.stringify(initialState));
      localStorage.setItem("cart", JSON.stringify(initialState));
      return newState;

    case REMOVE_ALL_PRODUCT:
      product = newCartProducts.find((products) => products.id === action.id);
      let newCartCount = Number(state.cartCount - product.count);
      removeProduct();

      newState = {
        cartCount: newCartCount,
        cartProducts: newCartProducts,
      };
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}
