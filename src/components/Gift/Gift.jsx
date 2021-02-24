import { Link } from "../index";
import "./Gift.scss";
import bags from '../../assets/img/bags.png';

export function Gift() {
  return (
    <aside className="gift">
      <img className="gift__img" src={bags} alt="gifts"/>
      <h4 className="t-blue">Получай товары БЕСПЛАТНО!</h4>
      <Link classes="btn btn-blue" href="/" text="Узнать подробнее" />
    </aside>
  );
}
