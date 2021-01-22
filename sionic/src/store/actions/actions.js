import {
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_IMAGES,
  ADD_PRODUCT,
} from "./actionsTypes";

export const actions = {
  getCategories: (response) => ({ type: GET_CATEGORIES, response }),

  getCategory: (response) => ({ type: GET_CATEGORY, response }),

  getProducts: (response) => ({ type: GET_PRODUCTS, response }),

  getProduct: (response) => ({ type: GET_PRODUCT, response }),

  getImages: (response) => ({ type: GET_IMAGES, response }),

  addProduct: (response) => ({ type: ADD_PRODUCT, response }),
};
