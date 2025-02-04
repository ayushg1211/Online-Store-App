import React, { useEffect, useState } from "react";
import styles from "./AllProducts.module.css";
import axios from "axios";

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  let uId = localStorage.getItem("userid");
  // console.log(uId) ;

  async function handleAddToCart(product) {
    // console.log(product) ;
    let res = await fetch(`http://localhost:6060/users/${uId}`) ;
    let data = await res.json() ;
    console.log(data) ;

    let updatedCart = data.cart ? [...data.cart, ] : [] ;

    let existingProduct = updatedCart.find((ele)=> ele.id === product.id) ;

    if(existingProduct){
        existingProduct.quantity += 1;
    }
    else{
        updatedCart.push({...product, quantity:1}) ;
    }

    await axios.patch(`http://localhost:6060/users/${uId}`,{
      cart:updatedCart
    })
  }

  async function fetchData() {
    try {
      let res = await fetch("https://fakestoreapi.in/api/products");
      let prodData = await res.json();
      // console.log(prodData.products);
      setProducts(prodData.products);
      setLoading(false);
    } catch (error) {
      console.error("Error..........: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      console.log(products);
    }, 3000);
  }, []);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.productGrid}>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <h2 className={styles.productTitle}>
                {product.title.slice(0, 30)}...
              </h2>
              <p className={styles.productPrice}>${product.price}</p>
              <p className={styles.productDescription}>
                {product.description.slice(0, 50)}...
              </p>
              <button
                className={styles.addToCartButton}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AllProducts;
