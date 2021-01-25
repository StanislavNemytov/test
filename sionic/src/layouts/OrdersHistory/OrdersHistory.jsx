import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { Order } from "../../components";
import { getImages } from "../../store/requests";
import {
  selectorReducerApi,
  selectorReducerDelForm,
} from "../../store/selectors/selector";
import "./OrdersHistory.scss";

function OrdersHistory({ data: { ordersHistory }, getImages, reducerAPI }) {
  const { images } = reducerAPI;
  const [orders, setOrders] = useState(JSON.parse(ordersHistory));
  let [ordersImages, setOrdersImages] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(ordersHistory));
  }, [ordersHistory]);

  useMemo(() => {
    setOrdersImages(
      orders.map(({ productsInOrder }, index) => {
        getImages(productsInOrder[0].product.id);
        return {
          id: productsInOrder[0].product.id,
          name: productsInOrder[0].product.name,
        };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders.length]);

  return (
    <section className="history">
      <header className="content__header">
        <h4>История заказов</h4>
      </header>

      {ordersImages.length > 0 && (
        <ul className="history__orders">
          {orders.map((order, index) => {
            const img = images && images[ordersImages[index].id];
            return (
              <Order
                {...order}
                img={img}
                nameOfOrder={ordersImages[index].name}
                key={index.toString()}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  data: selectorReducerDelForm(state),
  reducerAPI: selectorReducerApi(state),
});

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);
