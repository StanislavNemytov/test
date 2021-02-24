import { CartCount, Logo, Position, Search, User } from "../../components";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Position />
      <Search />
      <CartCount />
      <User />
    </header>
  );
}
