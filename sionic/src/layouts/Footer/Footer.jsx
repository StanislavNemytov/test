import { Logo } from "../../components";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />

        <div className="right-part">
          <div className="footer__connect">
            <p>Присоединяйтесь к нам</p>

            <div className="s-v">
              {[
                ["//facebook.com", "fb"],
                ["//vk.com", "vk"],
                ["//instagram.com", "inst"],
              ].map((item) => (
                <a
                  className={item[1]}
                  href={item[0]}
                  key={item[1]}
                  aria-label={item[1]}
                >
                  {item[1]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__app">
            <p>Устанавливайте приложение</p>
            <div className="apps">
              {["gp", "aps"].map((item) => (
                <a className={item} href="/" key={item} aria-label={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__second-part">
          <p>© Sionic</p>
          <p>Правовая информация</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}
