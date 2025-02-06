import React, { useState } from "react";
import styles from "./CartItem.module.css";
import axios from "axios";

const CartItem = ({ product,setUserDetails }) => {
  // console.log(product) ;
  let uId = localStorage.getItem("userid");

  async function handleRemoveFromCart(prodId) {
    try {
      let { data } = await axios.get(`http://localhost:6060/users/${uId}`);
      // console.log(data);
      // console.log(prodId);

      let updatedCart = data.cart.map((item)=>{
        if(item.id == prodId){
          if(item.quantity > 1){
           return{...item, quantity:item.quantity - 1, price:(item.price/item.quantity) * (item.quantity - 1) } ;
          }
          else{
            return null ;
          }
        
        }  return item ;
      }).filter((item)=> item != null) ;
      console.log(updatedCart);

      await axios.patch(`http://localhost:6060/users/${uId}`,{
        cart: updatedCart
      })
      setUserDetails({...data,cart:updatedCart})
    } catch (error) {
      console.log("Error while removing Product:- ", error);
    }
  }

  return (
    <>
      <article key={product.id} className={styles.itemCont}>
        <div className={styles.infoCont}>
          <div className={styles.details}>
            <div className={styles.prodName}>{product.title}</div>
            <div className={styles.prodInfoCont}>
              <span>
                <b>Color</b>: {product.color},
              </span>
              <span>
                <b>Brand:</b> {product.brand},
              </span>
              <span>
                <b>Model:</b> {product.model},
              </span>
              <span>
                <b>Category:</b> {product.category}
              </span>
            </div>
            <div>{product.price}$</div>
            <div
              className={styles.removeCont}
              onClick={() => {
                handleRemoveFromCart(product.id);
              }}
            >
              Remove
            </div>
          </div>
          <div className={styles.imgQuanCont}>
            <div className={styles.imgCont}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.quantityCont}>
              {/* <button>-</button> */}
              <span> Quantity: {product.quantity}</span>
              {/* <button>+</button> */}
            </div>
          </div>
        </div>
      </article>
      <hr className={styles.divider} />
    </>
  );
};

export default CartItem;
