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
        <li className={isActive==1 ? styles.active : ""}>
          <NavLink
            className={({ isActive }) => (isActive ? setActive(1) : "")}
            to="/"
          >
            home
          </NavLink>
        </li>

        {user_id ? (
          <Fragment>
            <li
             className={isActive==2 ? styles.active : ""}
            >
              <NavLink
                className={({ isActive }) => (isActive ? setActive(2) : "")}
                to="/allproducts"
              >
                All Products
              </NavLink>
            </li>
            <li  className={isActive==3 ? styles.active : ""}>
              <NavLink
                className={({ isActive }) => (isActive ? setActive(3) : "")}
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
            <li  className={isActive==4 ? styles.active : ""}>
              <NavLink
                className={({ isActive }) => (isActive ? setActive(4) : "")}
                to="/login"
              >
                login
              </NavLink>
            </li>
            <li  className={isActive==5 ? styles.active : ""}>
              <NavLink
                className={({ isActive }) => (isActive ? setActive(5) : "")}
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
