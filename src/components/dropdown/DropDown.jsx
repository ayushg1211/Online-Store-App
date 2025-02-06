import React from "react";
import styles from "./DropDown.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios" ;


const DropDown = ({setOpen, user_id}) => {
  const navigate = useNavigate() ;
  const logout = () => {
    localStorage.removeItem("userid");
    setOpen(false) ;
    navigate("/");
  }

  const deleteProfile = async ()=>{
    console.log("Profile Delte") ;

    let confirmation = confirm("Are you sure ?") ;
    console.log(confirmation)

    if(confirmation){
      try{
        await axios.delete(`http://localhost:6060/users/${user_id}`)
        alert("Profile deleted")
        logout() ;
      }
      catch(error){
        console.log("unable to delete", error) ;
        alert("unable to delete") ;
      }
    }
  }

  return (
    <div className={styles.dropdownCont}>
      <ul className={styles.dropdown}>
        <li onClick={()=>{setOpen(false)}}>
          <NavLink to={`/editprofile/${user_id}`}>Edit Profile</NavLink>
        </li>
        <li className={styles.delete} onClick={deleteProfile}>
          Delete Account
        </li>
        <li
          onClick={logout}
        >
          <NavLink>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
