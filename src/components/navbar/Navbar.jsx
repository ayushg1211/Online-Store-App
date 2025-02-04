import React, { Fragment } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  let user_id = localStorage.getItem("userid");
  let navigate = useNavigate();
  return (
    <nav id={styles.navbar}>
      <figure>logo</figure>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            home
          </NavLink>
        </li>

        {user_id ? (
          <Fragment>
            <li
              onClick={() => {
                navigate("/cart");
              }}
            >
              <NavLink>Cart</NavLink>
            </li>
            <li
              onClick={() => {
                localStorage.removeItem("userid");
                navigate("/");
              }}
            >
              <NavLink>Logout</NavLink>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/login"
              >
                login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/signup"
              >
                sign up
              </NavLink>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
