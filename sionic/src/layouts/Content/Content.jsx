import { useMemo } from "react";
import { connect } from "react-redux";
import { Item } from "..";
import { Btn, Filter } from "../../components";
import { getCategories, getProducts } from "../../store/requests";
import { selectorReducerApi } from "../../store/selectors/selector";
import "./Content.scss";

function Content({ data, getCategories, getProducts }) {
  useMemo(() => {
    getCategories();
    getProducts();
  }, []);

  const { products, categories } = data;

  return (
    <section className="content">
      <header className="content__header">
        <h4>Категории товаров</h4>
        <Btn text="Настройки" classes="btn btn-link-blue" />
      </header>

      <Filter categories={categories || []} />

      {products && (
        <>
          <div className="products">
            {products.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>

          <Btn
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
