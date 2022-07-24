import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Products = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.items.list);

  const addItemHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        title: item.title,
        price: item.price,
        key: item.key,
      })
    );
  };

  const listMapped = list.map((item) => (
    <ProductItem
      key={Math.random().toFixed(5)}
      title={item.title}
      price={item.price}
      description={item.description}
      onAdd={addItemHandler.bind(null, item)}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem title={title} price={price} description={description} /> */}
        {listMapped}
      </ul>
    </section>
  );
};

export default Products;
