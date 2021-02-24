import { Banner, Gift } from "../../components";
import "./Aside.scss";
import banner from "../../assets/img/banner.png";

export function Aside() {
  const banners = [];
  while (banners.length < 3) {
    let text = `Новая коллекция-${banners.length + 1}`;
    banners.push(<Banner image={banner} text={text} key={text} />);
  }
  return (
    <aside className="aside-right">
      <Gift />
      {banners.map((item) => item)}
    </aside>
  );
}
