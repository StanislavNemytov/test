import {
  GET_CATEGORIES,
  GET_IMAGES,
  GET_NEXT_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY_ID,
  REMOVE_CATEGORY_ID,
} from "../actions/actionsTypes";

/**
 * @param {object[]} allProducts
 * @param {object[]} newProducts
 */
function filterNewProducts(allProducts, newProducts) {
  const result = [];
  newProducts.forEach((newProduct) => {
    if (
      allProducts.find((product) => product.id === newProduct.id) === undefined
    ) {
      result.push(newProduct);
    }
  });
  return result;
}

const initialState = {
  categoryId: null,
  allProducts: [],
  categories: [],
  products: [],
  currentRange: [0, 24],
};

export function reducerAPI(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.response.data,
        allProducts: [
          ...state.allProducts,
          ...filterNewProducts(state.allProducts, action.response.data),
        ],
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

    case GET_PRODUCTS_CATEGORY_ID:
      return {
        ...state,
        products: action.response.data,
        allProducts: [
          ...state.allProducts,
          ...filterNewProducts(state.allProducts, action.response.data),
        ],
        categoryId: action.id,
        currentRange: [0, 24],
      };

    case REMOVE_CATEGORY_ID:
      return {
        ...state,
        categoryId: null,
        currentRange: [0, 24],
      };

    case GET_NEXT_PRODUCTS:
      const { currentRange } = state;
      return {
        ...state,
        products: [...state.products, ...action.response.data],
        allProducts: [
          ...state.allProducts,
          ...filterNewProducts(state.allProducts, action.response.data),
        ],
        currentRange: currentRange.map((number) => number + 25),
      };

    default:
      return state;
  }
}
