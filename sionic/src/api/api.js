import axios from "axios";

export const instance = axios.create({
  baseURL: "https://test2.sionic.ru/api/",
});

export const httpRequests = {
  getProducts: (range, categoryId) => {
    return instance
      .get(
        `products?sort=["name","ASC"]&range=${JSON.stringify(
          range
        )}&filter={"category_id":${categoryId}}`
      )
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
  },

  getProduct: (id) => {
    return instance
      .get(`products/${id}`)
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
  },

  getImages: (id) => {
    return instance
      .get(`productImages?filter={"product_id":${id}}`)
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
  },

  getCategories: () => {
    return instance
      .get('categories?sort["name", "ASC"]')
      .then((resp) => resp)
      .catch((error) => {
        console.log(error);
      });
  },

  getProductsByCategoryId: (category_id) => {
    return instance
      .get(
        `Products?sort=["name","ASC"]&range=[0,24]&filter={"category_id":${category_id}}`
      )
      .then((resp) => resp)
      .catch((error) => {
        console.log(error);
      });
  },
};
