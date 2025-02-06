import React, { useEffect, useState } from 'react'
import axios from "axios" ;
import {useParams} from "react-router-dom" ;
// name , email, password, submit button => create a controlled form and on submit print dataobject in console
const EditProfile = () => {
//    let [formData, setFormData] = useState({
//       name:"",
//       email:"",
//       password:""
//     })

//     // let [allData, setAllData] = useState([]) ;
  
//     function handleChange(e){
//       // console.log(e) ;
//       let {name, value} = e.target ;
//       setFormData({...formData, [name]: value}) ;
//     }

//     async function formSubmit(e){
//       e.preventDefault() ;
//       console.log(formData) ;

//       try{
//         let resp = await axios.post("http://localhost:6060/users", formData) ;
//         console.log(resp) ;
//         console.log("data sent successfully") ;
//         setFormData({name:"", email:"", password:""}) ; // clear all inputs
//       }
//       catch(error){
//         console.log(error);
//         console.log("Something went wrong! Data not sent");
        
//       }

//       // setAllData([...allData, formData]) ;
//       // console.log(allData) ;
//     }
        let id = useParams() ;
        console.log(id) ;   

        useEffect(()=>{
            async function getEditUser(){
                let {data} = await axios.get(`http://localhost:6060/users/${id}`) ;
                console.log(data) ;
            }
            getEditUser() ;
        },[id])

  return (
      <section>
        <h1>Edit Profile</h1>
        <form className='card' 
        // onSubmit={formSubmit}
        >
        <label htmlFor="email">Name: </label>
          <input type="text" 
        //   value={formData.name} 
          name='name' 
        //   onChange={handleChange}
          />
          <br />
          <label htmlFor="email">email: </label>
          <input type="email" 
        //   value={formData.email} 
          name='email' 
        //   onChange={handleChange}
          />
          <br />
          <label htmlFor="passsword">password: </label>
          <input type="password" 
        //   value={formData.password} 
          name='password' 
        //   onChange={handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default EditProfile ;
