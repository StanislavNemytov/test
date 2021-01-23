import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
  removeAllProducts,
} from "../../store/dispState";
import "./Btn.scss";

function Btn({
  text,
  classes,
  addProduct,
  removeProduct,
  removeAllProducts,
  id = "",
  variant = "default",
}) {
  const variantOfAction = {
    add: addProduct,
    remove: removeProduct,
    removeAll: removeAllProducts,
    default: () => {},
  };
  const onClick = variantOfAction[variant];

  return (
    <button onClick={() => onClick(id)} className={classes} aria-label={text}>
      {text}
    </button>
  );
}

const mapDispatchToProps = {
  addProduct,
  removeProduct,
  removeAllProducts,
};

export default connect(null, mapDispatchToProps)(Btn);
