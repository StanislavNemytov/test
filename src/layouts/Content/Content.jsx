import { useEffect } from "react";
import { connect } from "react-redux";
import { Item } from "..";
import { Btn, Filter } from "../../components";
import { getCategories, getProducts } from "../../store/requests";
import { selectorReducerApi } from "../../store/selectors/selector";
import "./Content.scss";

function Content({ data, getCategories, getProducts }) {
  const { products, categories, currentRange, categoryId } = data;

  useEffect(() => {
    categories.length === 0 && getCategories();
    products.length === 0 && getProducts(currentRange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="content">
      <header className="content__header">
        <h4>Категории товаров</h4>
        <Btn
          text="Настройки"
          classes="content__header__settings btn btn-link-blue"
        />
      </header>

      <Filter categories={categories || []} clickable={true} />

      {products && (
        <>
          <ul className="products">
            {products.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>

          <Btn
            id={categoryId}
            variant="nextProducts"
            nextRange={true}
            text="Показать больше товаров"
            classes="show-more btn btn-secondary"
          />
        </>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({ data: selectorReducerApi(state) });

const mapDispatchToProps = {
  getCategories,
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
