import { connect } from "react-redux";
import { Btn } from "..";
import "./Order.scss";

function Order({ date, time, img, nameOfOrder }) {
  return (
    <li className="history__order" key={`${date} ${time}`}>
      <header className="history__order__header">
        <div className="history__order__image">
          {img && (
            <img
              src={`https://test2.sionic.ru${img[0].image_url}`}
              alt={img[0].image_name}
            />
          )}
        </div>
        <h4>{nameOfOrder}</h4>
        <p className="date t-gray">
          {date.split("-").join(".")}{" "}
          <Btn classes="btn btn-link-blue" text="Подробнее" />{" "}
        </p>
      </header>

      <ul className="history__products"></ul>
    </li>
  );
}

const mapStateToProps = (state) => ({
  // data: selectorReducerDelForm(state),
  // reducerAPI: selectorReducerApi(state),
});

const mapDispatchToProps = {
  // getImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
