import React, { Fragment, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import DropDown from "../dropdown/DropDown";

const Navbar = () => {
  let user_id = localStorage.getItem("userid");
  const [isOpen, setOpen] = useState(false);
  const [isActive, setActive] = useState(1) ;
  let navigate = useNavigate();
  return (
    <nav id={styles.navbar}>
      <figure>logo</figure>
      <ul>
        <li onClick={()=>{setActive(1)}} className={isActive==1 ? styles.active : ""}>
          <NavLink
            // className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            home
          </NavLink>
        </li>

        {user_id ? (
          <Fragment>
            <li
            onClick={()=>{setActive(2)}} className={isActive==2 ? styles.active : ""}
            >
              <NavLink
                // className={({ isActive }) => (isActive ? styles.active : "")}
                to="/allproducts"
              >
                All Products
              </NavLink>
            </li>
            <li onClick={()=>{setActive(3)}} className={isActive==3 ? styles.active : ""}>
              <NavLink
                // className={({ isActive }) => (isActive ? styles.active : "")}
                to="/cart"
              >
                Cart
              </NavLink>
            </li>

            {/* <li> */}
            <Hamburger toggled={isOpen} toggle={setOpen} size={18}  label="Show menu" />
            {/* </li> */}
            {/* {isOpen ? <DropDown/> : ""} */}

            
          </Fragment>
        ) : (
          <Fragment>
            <li onClick={()=>{setActive(4)}} className={isActive==4 ? styles.active : ""}>
              <NavLink
                // className={({ isActive }) => (isActive ? styles.active : "")}
                to="/login"
              >
                login
              </NavLink>
            </li>
            <li onClick={()=>{setActive(5)}} className={isActive==5 ? styles.active : ""}>
              <NavLink
                // className={({ isActive }) => (isActive ? styles.active : "")}
                to="/signup"
              >
                sign up
              </NavLink>
            </li>
          </Fragment>
        )}
      </ul>
      {isOpen ? <DropDown setOpen={setOpen} user_id = {user_id}/> : ""}
      
    </nav>
  );
};

export default Navbar;
