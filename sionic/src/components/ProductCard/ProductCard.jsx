import { Btn } from "..";

function ProductCard({ data }) {
  const { product, count } = data;
  const { name, id } = product;
  return (
    <div className="product-card">
      <h4>{name}</h4>
      <span>
        {count}
        <Btn id={id} text="+" classes="btn btn-secondary" />
      </span>
    </div>
  );
}

export default ProductCard;
