import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { Order } from "../../components";
import { getHistory } from "../../store/dispDelForm";
import { getImages } from "../../store/requests";
import {
  selectorReducerApi,
  selectorReducerDelForm,
} from "../../store/selectors/selector";
import "./OrdersHistory.scss";

function OrdersHistory({
  data: {
    ordersHistory: { data },
  },
  getImages,
  reducerAPI,
  getHistory,
}) {
  const { images } = reducerAPI;
  const [orders, setOrders] = useState(data || []);
  let [ordersImages, setOrdersImages] = useState([]);

  useMemo(() => {
    getHistory();
  }, [getHistory]);

  useEffect(() => {
    data && setOrders(data.reverse());
  }, [data]);

  useEffect(() => {
    setOrdersImages(
      orders.map(({ data }, index) => {
        const { productsInOrder } = JSON.parse(data)[0];
        getImages(productsInOrder[0].product.id);
        return {
          id: productsInOrder[0].product.id,
          name: productsInOrder[0].product.name,
        };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders.length]);

  if (!orders) {
    return null;
  }

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
                {...JSON.parse(order.data)[0]}
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

const mapDispatchToProps = { getImages, getHistory };

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);
