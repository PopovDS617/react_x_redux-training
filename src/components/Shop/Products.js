import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Products = (props) => {
  // const title = useSelector((state) => state.items.title);
  // const price = useSelector((state) => state.items.price);
  // const description = useSelector((state) => state.items.description);

  const list = useSelector((state) => state.items.list);

  const listMapped = list.map((item) => (
    <ProductItem
      key={Math.random().toFixed(5)}
      title={item.title}
      price={item.price}
      description={item.description}
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
