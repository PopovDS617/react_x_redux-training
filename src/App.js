import React from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./components/store/cart-actions";
import { cartActions } from "./components/store/cart-slice";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
