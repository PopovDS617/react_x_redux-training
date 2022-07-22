import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addHandler = (key) => {
    dispatch(cartActions.increase({ key: key }));
  };

  const removeHandler = (key) => {
    dispatch(cartActions.decrease({ key: key }));
  };

  const cartItemsList = cartItems.map((item) => (
    <CartItem
      key={Math.random().toFixed(5)}
      title={item.title}
      quantity={item.quantity}
      total={item.total}
      price={item.price}
      onAdd={addHandler.bind(null, item.key)}
      onRemove={removeHandler.bind(null, item.key)}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <h3>no items - add something</h3>}
      <ul>{cartItemsList}</ul>
    </Card>
  );
};

export default Cart;
