export default function cantRender(
  allProducts,
  cartProducts,
  getProduct,
  getImages,
  check = false
) {
  if (cartProducts.length === 0) {
    return false;
  }
  const haveAllProductsInCart = (allProducts, cartProducts) => {
    let result = false;
    cartProducts.every((product) => {
      if (allProducts.find((pr) => pr.id === product.id)) {
        result = true;
        return true;
      }
      result = false;
      return false;
    });

    return result;
  };

  if (
    !check &&
    (allProducts.length < cartProducts.length ||
      (allProducts.length > cartProducts.length &&
        !haveAllProductsInCart(allProducts, cartProducts)))
  ) {
    JSON.parse(JSON.stringify(cartProducts)).forEach((productData) => {
      if (!allProducts.find((pr) => pr.id === productData.id)) {
        getProduct(productData.id);
        getImages(productData.id);
      }
    });
  }

  if (
    check &&
    (allProducts.length < cartProducts.length ||
      (allProducts.length > cartProducts.length &&
        !haveAllProductsInCart(allProducts, cartProducts)))
  ) {
    return true;
  }

  return false;
}
