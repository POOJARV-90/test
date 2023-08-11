import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [userdata, setUserdata] = useState({
        name:"" ,
        email:"",
        password:""
    })

    const router = useNavigate();

    const hadleChange = (event) => {
        setUserdata({...userdata,[event.target.name]:event.target.value}) 
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(userdata.name && userdata.email && userdata.password){

            const array = JSON.parse(localStorage.getItem("Users")) || []

            const object = {
                name : userdata.name,
                email : userdata.email,
                password : userdata.password
            }
            array.push(object);
            setUserdata({
                name:"" ,
                email:"",
                password:""
            })

            localStorage.setItem("Users",JSON.stringify(array))
            router("/Login")

        }else{
            alert("please fill all the details first")
        }






    }
  return (
    <div style={{width:"35%", border:"1px solid black" , textAlign:"center" ,margin:"auto" , marginTop:"60px" , paddingTop:"3%",paddingBottom:"3%",fontWeight:"bold"}}>
        <form onSubmit={handleSubmit}>

            <label > Name :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} onChange={hadleChange} value={userdata.name} name='name' type="text" />  <br />

            <label > Email :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} onChange={hadleChange} value={userdata.email} name='email' type="email" /> <br />

            <label > Password :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} onChange={hadleChange} value={userdata.password} name='password' type="password" /> <br />

            <input style={{width:"20%" , padding:"1.5%" , marginTop:"25px"}} type="submit" value='register' />


        </form>
    </div>
  )
}

export default Register