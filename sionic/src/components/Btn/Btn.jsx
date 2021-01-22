import { connect } from "react-redux";
import { addProduct } from "../../store/dispState";
import "./Btn.scss";

function Btn({ text, classes, addProduct, id = "" }) {
  return (
    <button
      onClick={() => addProduct(id)}
      className={classes}
      aria-label={text}
    >
      {text}
    </button>
  );
}

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(Btn);
