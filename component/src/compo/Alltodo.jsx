import React, { useEffect, useState } from 'react'

const Alltodo = () => {
    const [isuserexist , setUserexist]  = useState(false);
    const [todo , setTodo] = useState([])
    // console.log(todo,"abc");
    // console.log(isuserexist ,"jajdghdg");

    useEffect(() => {
        const array = JSON.parse(localStorage.getItem("Todo"))
        if(array?.length){
            setUserexist(true)
            setTodo(array)
        }else{
            setUserexist(false)
        }

    },[])

   
  return (
    <div>
     {!isuserexist? <div> No TODO</div> :

     
     <div>

        {todo && todo.map((pro)=> (
            <div>
                <h1>*{pro.subject}</h1>
                <h1> *{pro.description}</h1>
            </div>

        ))}
     
     </div>

     
     }
       
    </div>
  )
}

export default Alltodo