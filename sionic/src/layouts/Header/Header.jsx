import { Cart, Logo, Position, Search, User } from "../../components";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Position />
      <Search />
      <Cart />
      <User />
    </header>
  );
}
