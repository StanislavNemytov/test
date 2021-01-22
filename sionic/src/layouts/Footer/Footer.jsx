import { Logo } from "../../components";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__connect">Присоединяйтесь к нам</div>
      <div className="footer__app">Устанавливайте приложение</div>
    </footer>
  );
}
