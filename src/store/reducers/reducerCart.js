import {
  ADD_PRODUCT,
  REMOVE_ALL_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
  SET_SAVED_DATA,
} from "../actions/actionsTypes";
import {
  addProductToCart,
  removeAllProductFromCart,
  changeCountOfProductInCart,
  removeAllProductsFromCart,
} from "../requests/request-cart";

const initialState = {
  cartCount: 0,
  cartProducts: [],
};

export function reducerCart(
  state = JSON.parse(JSON.stringify(initialState)),
  action
) {
  let newCartProducts = JSON.parse(JSON.stringify(state.cartProducts));
  let product;
  let newState;
  let variantOfAction = changeCountOfProductInCart;

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
        variantOfAction = changeCountOfProductInCart;
      } else {
        product = { id: action.id, count: 1 };
        newCartProducts.push(product);
        variantOfAction = addProductToCart;
      }

      newState = {
        cartCount: Number(state.cartCount + 1),
        cartProducts: newCartProducts,
      };

      variantOfAction(newState.cartCount, product);
      return newState;

    case REMOVE_PRODUCT:
      if (newCartProducts.length) {
        product = newCartProducts.find((products) => products.id === action.id);
      }

      if (product.count === 1) {
        removeProduct();
        variantOfAction = removeAllProductFromCart;
      } else {
        product.count -= 1;
      }

      newState = {
        cartCount: Number(state.cartCount - 1),
        cartProducts: newCartProducts,
      };

      variantOfAction(newState.cartCount, product);
      return newState;

    case REMOVE_ALL_PRODUCTS:
      newState = JSON.parse(JSON.stringify(initialState));

      removeAllProductsFromCart();

      return newState;

    case REMOVE_ALL_PRODUCT:
      product = newCartProducts.find((products) => products.id === action.id);
      let newCartCount = Number(state.cartCount - product.count);
      removeProduct();

      newState = {
        cartCount: newCartCount,
        cartProducts: newCartProducts,
      };

      removeAllProductFromCart(newState.cartCount, product);
      return newState;

    case SET_SAVED_DATA:
      const {
        response: {
          count: {
            data: { count },
          },
          cartProducts: { data },
        },
      } = action;

      return { cartCount: count, cartProducts: data };

    default:
      return state;
  }
}
