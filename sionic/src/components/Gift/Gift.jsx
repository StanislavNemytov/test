import { Link } from "../index";
import "./Gift.scss";

export function Gift() {
  return (
    <aside className="gift">
      <h4 className="t-blue">Получай товары БЕСПЛАТНО!</h4>
      <Link classes="btn btn-blue" href="/" text="Узнать подробнее" />
    </aside>
  );
}
