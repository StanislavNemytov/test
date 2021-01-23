import user from "../../assets/img/user.png";
import "./User.scss";

export function User() {
  return (
    <a href="/" className="user__avatar">
      <img src={user} alt="User name" />
    </a>
  );
}
