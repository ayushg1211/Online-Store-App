import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";

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
    <>
      <section>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
            <h1>Cart</h1>
        //   userDetails.cart.map((product) => {
        //    return <div key={product.id} 
        //     // className={styles.productCard}
        //     >
        //       <img
        //         src={product.image}
        //         alt={product.title}
        //         // className={styles.productImage}
        //       />
        //       <h2 
        //     //   className={styles.productTitle}
        //       >
        //         {product.title.slice(0, 30)}...
        //       </h2>
        //       <p 
        //     //   className={styles.productPrice}
        //       >${product.price}</p>
        //       <p 
        //     //   className={styles.productDescription}
        //       >
        //         {product.description.slice(0, 50)}...
        //       </p>
        //       <button
        //         // className={styles.addToCartButton}
        //         onClick={() => handleAddToCart(product)}
        //       >
        //         Add to Cart
        //       </button>{" "}
        //     </div>;
        //   })
        )}
      </section>
    </>
  );
};

export default Cart;
