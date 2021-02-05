import { serverRequests } from "../../api/apiServer";
import { actions } from "../actions/actions";

export const addProductToCart = (countCart, product) => {
  serverRequests.addProduct(countCart, product);
  console.log("Один продукт добавлен в корзину.");
};

export const changeCountOfProductInCart = (cartCount, product) => {
  serverRequests.changeCountOfProduct(cartCount, product);
  console.log("Один продукт удален из/добавлен в корзины.");
};

export const removeAllProductFromCart = (cartCount, product) => {
  serverRequests.removeAllProduct(cartCount, product);
  console.log("Весь продукт удалён из корзины.");
};

export const removeAllProductsFromCart = async (cartCount, product) => {
  await serverRequests.removeAllProducts(cartCount, product);
  console.log("Все продукты удалёны из корзины.");
};

export const setSavedData = () => async (dispatch) => {
  const response = await serverRequests.getSaveData();
  dispatch(actions.setSaveData(response));
};
