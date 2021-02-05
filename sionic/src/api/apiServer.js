import axios from "axios";

export const serverInstance = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export const serverRequests = {
  addProduct: (countCart, product) => {
    serverInstance.put("cart", { count: countCart });
    serverInstance.post("cartProducts", { ...product });
  },

  changeCountOfProduct: (countCart, product) => {
    serverInstance.put("cart", { count: countCart });
    serverInstance.put(`cartProducts/${product.id}`, { count: product.count });
  },

  removeAllProduct: (cartCount, product) => {
    serverInstance.put("cart", { count: cartCount });
    serverInstance.delete(`cartProducts/${product.id}`);
  },

  removeAllProducts: async () => {
    serverInstance.put("cart", { count: 0 });

    const resp = await serverInstance.get("cartProducts");

    resp.data.forEach(({ id }) => {
      serverInstance.delete(`cartProducts/${id}`);
    });
  },

  addOrderToHistory: (order) => {
    serverInstance.post("history", { data: JSON.stringify(order) });
  },

  getHistoryOfOrders: () => {
    return serverInstance
      .get("history")
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
  },

  getSaveData: async () => {
    const count = await serverInstance
      .get("cart/")
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
    const cartProducts = await serverInstance
      .get("cartProducts")
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });

    return { count, cartProducts };
  },
};
