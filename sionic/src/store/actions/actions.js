import {
  GET_CATEGORIES,
  GET_PRODUCTS_CATEGORY_ID,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_IMAGES,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_ALL_PRODUCT,
  REMOVE_CATEGORY_ID,
  GET_NEXT_PRODUCTS,
} from "./actionsTypes";

export const actions = {
  getCategories: (response) => ({ type: GET_CATEGORIES, response }),

  getProductsByCategoryId: (response, id) => ({
    type: GET_PRODUCTS_CATEGORY_ID,
    response,
    id,
  }),

  getProducts: (response) => ({ type: GET_PRODUCTS, response }),

  getProduct: (response) => ({ type: GET_PRODUCT, response }),

  getImages: (response) => ({ type: GET_IMAGES, response }),

  getNextProducts: (response) => ({ type: GET_NEXT_PRODUCTS, response }),

  addProduct: (id) => ({ type: ADD_PRODUCT, id }),

  removeProduct: (id) => ({ type: REMOVE_PRODUCT, id }),

  removeAllProducts: () => ({ type: REMOVE_ALL_PRODUCTS }),

  removeAllProduct: (id) => ({ type: REMOVE_ALL_PRODUCT, id }),

  removeCategoryId: () => ({ type: REMOVE_CATEGORY_ID }),
};
