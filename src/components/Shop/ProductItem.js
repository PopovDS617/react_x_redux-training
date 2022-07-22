import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { itemsActions } from "../store/items-slice";
import { cartActions } from "../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, key } = props;

  //const dispatch = useDispatch();

  // const addItemHandler = () => {
  //   dispatch(cartActions.addToCart({ title: title, price: price, key: key }));
  // };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={props.onAdd}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
