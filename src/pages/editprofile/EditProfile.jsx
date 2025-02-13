import React, { useEffect, useState } from 'react'
import axios from "axios" ;
import {useNavigate, useParams} from "react-router-dom" ;

const EditProfile = () => {
   let [editUser, setEditUser] = useState({
      name:"",
      email:"",
      password:""
    })

    let navigate = useNavigate() ;

    // let [allData, setAllData] = useState([]) ;
  
    function handleChange(e){
      // console.log(e) ;
      let {name, value} = e.target ;
      setEditUser({...editUser, [name]: value}) ;
    }

    async function formSubmit(e){
      e.preventDefault() ;
      console.log(editUser) ;

      try{
        let resp = await axios.patch(`http://localhost:6060/users/${id}`, editUser) ;
        console.log(resp) ;
        console.log("data sent successfully") ;
        setEditUser({name:"", email:"", password:""}) ; // clear all inputs
        localStorage.removeItem("userid") ;
        navigate("/")
        
      }
      catch(error){
        console.log(error);
        console.log("Something went wrong! Data not sent");
      }

    //   // setAllData([...allData, formData]) ;
    //   // console.log(allData) ;
    }

        let {id} = useParams() ; // gets id value from current URL....and we dynamically add 'id' to edit url
        console.log(id) ;   

        useEffect(()=>{
          console.log(id) ;
            async function getEditUser(){
                let {data} = await axios.get(`http://localhost:6060/users/${id}`) ;
                console.log("this is data :-", data) 
                setEditUser(data) ;
            }
            getEditUser() ;
        },[id]) ;

  return (
      <section>
        <h1>Edit Profile</h1>
        <form className='card' 
        onSubmit={formSubmit}
        >
        <label htmlFor="email">Name: </label>
          <input type="text" 
          value={editUser.name} 
          name='name' 
          onChange={handleChange}
          />
          <br />
          <label htmlFor="email">email: </label>
          <input type="email" 
          value={editUser.email} 
          name='email' 
          onChange={handleChange}
          />
          <br />
          <label htmlFor="passsword">password: </label>
          <input type="password" 
          value={editUser.password} 
          name='password' 
          onChange={handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default EditProfile ;
