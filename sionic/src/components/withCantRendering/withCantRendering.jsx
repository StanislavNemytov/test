import { useEffect } from "react";

export default function withCantRendering(WrappedComponent) {
  return (props) => {
    const { allProducts, cartProducts, getProduct, getImages } = props;

    const haveAllProductsInCart = (allProducts, cartProducts) => {
      return cartProducts.every((product) =>
        allProducts.find((pr) => pr.id === product.id)
      );
    };

    const nextStep =
      allProducts.length < cartProducts.length ||
      (allProducts.length > cartProducts.length &&
        !haveAllProductsInCart(allProducts, cartProducts));

    useEffect(() => {
      if (nextStep) {
        JSON.parse(JSON.stringify(cartProducts)).forEach((productData) => {
          if (!allProducts.find((pr) => pr.id === productData.id)) {
            getProduct(productData.id);
            getImages(productData.id);
          }
        });
      }
    }, [allProducts, cartProducts, getImages, getProduct, nextStep]);

    if (nextStep) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
