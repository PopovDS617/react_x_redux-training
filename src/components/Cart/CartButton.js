import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { cartActions } from "../store/cart-slice";

const CartButton = (props) => {
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.showCart());
    console.log("open cart");
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;
