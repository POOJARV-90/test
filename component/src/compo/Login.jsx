import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userdata , setUserdata] = useState({
        email:"",
        password:""
    })

    const router = useNavigate();

    const hadleChange = (event) => {
        setUserdata({...userdata,[event.target.name]:event.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userdata.email && userdata.password) {
          const users = JSON.parse(localStorage.getItem("Users")); //access to LS
    
          var flag = false;
          for (var i = 0; i < users.length; i++) {
            if (
              users[i].email == userdata.email &&
              users[i].password == userdata.password
            ) {
              flag = true;
              localStorage.setItem(("CurrentUser"),JSON.stringify( users[i])); //set currentuser
             
              alert("login succesfull")
              setUserdata({
                email:"",
                password:""
              })

              router("/")
              
              
              break;
            }
          }
          if (flag == false) {
               alert("Please check credentials.");   
          }
          
        } else {
          alert("Please submit all details");
        }
      };

  return (
    <div style={{width:"35%", border:"1px solid black" , textAlign:"center" ,margin:"auto" , marginTop:"60px" , paddingTop:"3%",paddingBottom:"3%",fontWeight:"bold"}}>
        <form onSubmit={handleSubmit} >


            <label > Email :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} 
            onChange={hadleChange} value={userdata.email} name='email' type="email" /> <br />

            <label > Password :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} 
            onChange={hadleChange} value={userdata.password} name='password' type="password" /> <br />

            <input style={{width:"20%" , padding:"1.5%" , marginTop:"25px"}} type="submit" value='register' />


        </form>
    </div>
  )
}

export default Login