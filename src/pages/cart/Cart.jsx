import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";
import CartItem from "../../components/cartitem/CartItem";

const Cart = () => {
  let uId = localStorage.getItem("userid");
  let [userDetails, setUserDetails] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCartItems() {
      let { data } = await axios.get(`http://localhost:6060/users/${uId}`);
      console.log(data);
      setUserDetails(data); // Storing User data state
      setLoading(false);
    }
    getCartItems();
  }, []);

  return (
    <section className={styles.cart}>
      <section className={styles.cartCont}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (userDetails.cart.length !=0 ? (
          userDetails.cart.map((product) => {
            return <CartItem key={product.id} product={product} setUserDetails={setUserDetails} />;
          })
        ) : <h1>Cart is Empty</h1>)}
      </section>
      <section className={styles.amountCont}>Bill Section</section>
    </section>
  );
};

export default Cart;
