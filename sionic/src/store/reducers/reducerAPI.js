import {
  GET_CATEGORIES,
  GET_IMAGES,
  GET_PRODUCT,
  GET_PRODUCTS,
} from "../actions/actionsTypes";

export function reducerAPI(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.response.data,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.response.data,
      };

    case GET_IMAGES:
      const { product_id } = action.response.data[0];
      return {
        ...state,
        images: {
          ...state.images,
          [product_id]: action.response.data,
        },
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.response.data,
      };

    default:
      return state;
  }
}
