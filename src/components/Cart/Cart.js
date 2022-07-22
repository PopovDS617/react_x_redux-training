import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addHandler = (title) => {
    dispatch(cartActions.increase({ title: title }));
  };

  const removeHandler = (title) => {
    dispatch(cartActions.decrease({ title: title }));
  };

  const cartItemsList = cartItems.map((item) => (
    <CartItem
      key={Math.random().toFixed(5)}
      title={item.title}
      quantity={item.quantity}
      total={item.total}
      price={item.price}
      onAdd={addHandler.bind(null, item.title)}
      onRemove={removeHandler.bind(null, item.title)}
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
