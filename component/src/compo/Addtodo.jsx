import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

const Addtodo = () => {
    const [userdata, setUserdata] = useState({
        subject:"" ,
        description:""
       
    })

    const router = useNavigate();

    const hadleChange = (event) => {
        setUserdata({...userdata,[event.target.name]:event.target.value}) 
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(userdata.subject && userdata.description){

            const array = JSON.parse(localStorage.getItem("Todo")) || []

            const randomId = uuidv4() ;
            userdata["id"] = randomId

            const object = {
                subject : userdata.subject,
                description : userdata.description,
                id : userdata.id  
            }
            array.push(object);
            setUserdata({
                subject:"" ,
                description:""
               
            })

            localStorage.setItem("Todo",JSON.stringify(array))
            alert("todo added")
            router("/Alltodo")

        }else{
            alert("please fill all the details first")
        }






    }
  return (
    <div style={{width:"35%", border:"1px solid black" , textAlign:"center" ,margin:"auto" , marginTop:"60px" , paddingTop:"3%",paddingBottom:"3%",fontWeight:"bold"}}>
        <form onSubmit={handleSubmit}>

            <label > subject :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} onChange={hadleChange} value={userdata.subject} name='subject' type="text" />  <br />

            <label > description :</label> <br />
            <input style={{width:"50%" , padding:"1.5%" , marginTop:"25px"}} onChange={hadleChange} value={userdata.description} name='description' type="text" /> <br />

            

            <input style={{width:"20%" , padding:"1.5%" , marginTop:"25px"}} type="submit" value='ADD' />


        </form>
    </div>
  )
}

export default Addtodo