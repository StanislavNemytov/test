import { useMemo } from "react";
import { connect } from "react-redux";
import { Btn, Filter } from "../../components";
import { getImages } from "../../store/requests";
import { selectorReducerApi } from "../../store/selectors/selector";
import "./Item.scss";

function Item({ item, data, getImages }) {
  const { id, name, category_id, price } = item;
  const { categories, images } = data;

  useMemo(() => {
    getImages(id);
  }, [getImages, id]);

  const img = images && images[id];

  return (
    <div className="item-card">
      <div className="item-card__header">
        {img && (
          <img
            className="item-card__header__img"
            src={`https://test2.sionic.ru${img[0].image_url}`}
            alt={img[0].image_name}
          />
        )}
        {categories && (
          <Filter
            categories={categories.filter((cat) => cat.id === category_id)}
          />
        )}
      </div>

      <div className="item-card__body">
        <a href="/">{name}</a>
        <p className="price t-blue">{price} ₽</p>
        {/* <p className="price_old t-disabled">
          <strike>{oldPrice}</strike>
          <span className="discount t-pink">{discount}</span>
        </p> */}
      </div>

      <div className="item-card__footer">
        <Btn id={id} text="Добавить в корзину" classes="btn btn-outline-blue" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ data: selectorReducerApi(state) });

const mapDispatchToProps = {
  getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
