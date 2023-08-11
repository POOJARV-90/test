import { createContext, useEffect, useReducer } from "react";

export const Authcontext = createContext();

const incialState = {user:null}

const reducer = (state , action) => {
    switch (action.type) {
        case "login":
            return{user:action.payload}
            
            break;

            case "logout":
                return{user:null}
                
                break;
    
        default:
            return state
            break;
    }

}

const Authprovider = ({children}) => {

    const [state , dispatch] = useReducer(reducer,incialState)


    const login = (userdata) => {
        localStorage.setItem("CurrentUser",JSON.stringify(userdata))
        dispatch({
            type:"login",
            payload:userdata
        })

    }
    const logout = () => {
        localStorage.removeItem("CurrentUser")
        dispatch({
            type:"logout",
           
        })

    }

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem("CurrentUser"))
        dispatch({
            type:"login",
            payload:user
        })

    },[])

    return(
        <Authcontext.Provider value={{state,login,logout}}>
            {children}
        </Authcontext.Provider>
    )



}

export default Authprovider;

