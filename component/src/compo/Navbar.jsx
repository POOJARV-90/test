import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from './Contex/Authcontext';

const Navbar = () => {

    const router = useNavigate();
    const {state , logout} = useContext(Authcontext)

    // console.log(state,"navbar");
  return (
    <div>
        <div style={{width:"100%" , border:"1px solid black" , height:"70px" , display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"20px" , fontWeight:"bold"}}>
            <div>TO DO</div>

            <div style={{width:"40%", display:"flex" , justifyContent:"space-evenly"}}>
                <span  onClick={()=>router("/Addtodo")}>Add todo</span>
                <span onClick={()=>router("/Alltodo")} >All todo</span>
                <span onClick={()=>router("/Register")}>Register</span>
                <span onClick={()=>router("/Login")} >Login</span>
                <span onClick={logout}>logout</span>
              
            </div>
            

        </div>


    </div>
  )
}

export default Navbar