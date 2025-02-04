import React, { useEffect, useState } from 'react'
import axios from "axios" ;
import { useNavigate } from 'react-router-dom'; // returns a function

const Login = () => {
  let [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const [allUsers, setAllUsers] = useState([]) ;
  const [auth, setAuth] = useState() ;
  let navigate = useNavigate() ;

  async function getSignUpUsers(){
    let {data} = await axios.get("http://localhost:6060/users");
    console.log(data) ;
    setAllUsers([...data]) ;
  }

  useEffect(()=>{
    getSignUpUsers() ;
  },[])

  function handleChange(e){
    console.log(e) ;
    let {name, value} = e.target ;
    setFormData({...formData, [name]: value}) ;
  }

  function formSubmit(e){
    e.preventDefault() ;
     let authUser =  allUsers.find((user)=>(formData.email == user.email && formData.password === user.password))
    // console.log(authUser);
    if(authUser){
      console.log("login successful") ;

      localStorage.setItem("userid", authUser.id) ;


      navigate("/allproducts")
    }
    else{
      console.log("User doesn't exist")
    }
  }

  return (
    <section>
      <form className='card' onSubmit={formSubmit}>
        <label htmlFor="email">email: </label>
        <input type="email" value={formData.email} name='email' onChange={handleChange}/>
        <br />
        <label htmlFor="passsword">password: </label>
        <input type="password" value={formData.password} name='password' onChange={handleChange}/>
        <br />
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login