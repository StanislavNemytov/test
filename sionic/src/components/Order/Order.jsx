import { useRef, useState } from "react";
import "./Order.scss";

function Order({
  img,
  nameOfOrder,
  date,
  time,
  address,
  productsInOrder,
  status,
}) {
  const [infoVisible, setInfoVisible] = useState(false);
  const numberOfOrderRef = useRef(null);
  const historyBodyRef = useRef();
  const numberOfOrder = `#${date.split("-").join("")}${time
    .split(":")
    .join("")}`;
  const costs = productsInOrder.reduce(
    (sum, item) => sum + item.product.price || 123,
    0
  );

  const copyNumberOfOrder = (e) => {
    numberOfOrderRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    e.target.focus();
  };

  const [heightOfDropdown, setHeightOfDropdown] = useState(0);

  const getHeightOfChildren = (e) => {
    let position = {
      top: 0,
      bottom: 0,
    };

    const arrayFromChildren = Array.from(historyBodyRef.current.children);
    arrayFromChildren.forEach((item) => {
      const { top, bottom } = item.getBoundingClientRect();

      position.top = position.top === 0 ? top : position.top;
      position.bottom = position.bottom < bottom ? bottom : position.bottom;
    });

    const height = position.bottom - position.top;
    const countOfLine = Math.floor(height / 36);

    setHeightOfDropdown(position.bottom - position.top + 10 + countOfLine * 10);
  };

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
          <button
            onClick={(e) => {
              setInfoVisible(!infoVisible);
              getHeightOfChildren(e);
            }}
            className="btn btn-link-blue"
          >
            Подробнее
          </button>
        </p>

        <button
          onClick={(e) => {
            setInfoVisible(!infoVisible);
            getHeightOfChildren(e);
          }}
          className="trigger-info btn-link-blue"
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`chevron ${infoVisible ? "opened" : "closed"}`}
          >
            <path
              d="M4 13L10 7L16 13"
              stroke="#AEC2EA"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </header>

      <div
        className={`history__order__body${infoVisible ? " show-info" : ""}`}
        ref={historyBodyRef}
        style={{ height: `${infoVisible ? heightOfDropdown : 0}px` }}
      >
        <div className="status">
          <p className="status__label t-gray">Статус заказа</p>
          <p className="status__content">
            <strong>
              {status.payment && "Оплачен"}/{status.delivery}
            </strong>
          </p>
        </div>

        <div className="number-of-order">
          <p className="number-of-order__label t-gray">Номер заказа</p>
          <p className="number-of-order__content t-blue">
            <strong>{numberOfOrder}</strong>

            <button onClick={copyNumberOfOrder} className="btn btn-link-blue">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.375 13.1251H3.125C2.43437 13.1251 1.875 12.5657 1.875 11.8751V5.62506C1.875 4.93444 2.43437 4.37506 3.125 4.37506H9.375C10.0656 4.37506 10.625 4.93444 10.625 5.62506V11.8751C10.625 12.5657 10.0656 13.1251 9.375 13.1251Z"
                    stroke="#2967FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.37512 4.375V3.125C4.37512 2.43437 4.9345 1.875 5.62512 1.875H11.8751C12.5657 1.875 13.1251 2.43437 13.1251 3.125V9.375C13.1251 10.0656 12.5657 10.625 11.8751 10.625H10.6251"
                    stroke="#2967FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </p>
        </div>

        <div className="quantity">
          <p className="quantity__label t-gray">Кол-во товаров</p>
          <p className="quantity__content">
            <strong>
              {productsInOrder.reduce((sum, item) => sum + item.count, 0)} шт.
            </strong>
          </p>
        </div>

        <div className="costs">
          <p className="costs__label t-gray">Стоимость</p>
          <p className="costs__content">
            <strong>{costs}₽</strong>
          </p>
        </div>

        <div className="address">
          <p className="address__label t-gray">Адрес доставки</p>
          <p className="address__content">
            <strong>{address}</strong>
          </p>
        </div>
      </div>

      <textarea
        className="copyToClipboard"
        ref={numberOfOrderRef}
        value={numberOfOrder}
        readOnly={true}
        tabIndex="-1"
      ></textarea>
    </li>
  );
}

export default Order;
