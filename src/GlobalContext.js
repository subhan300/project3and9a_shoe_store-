

import React,{createContext, useReducer} from "react"
import AppReducer from "./AppReducer.js"
import shoes from "./Shoes.json"
const  initialState ={
    transactions:[
        //  {price:20,count:0}

    ]
}



export const GlobalContext=createContext(initialState)


const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    const add_cart=(id)=>{console.log(id)
        dispatch({type:"add",payload:id}) }

    
        const deleteF=(e)=>
        {
            dispatch({type:"DELETE",payload:e})
        }
   
        // const cartCounter=(e)=>{
        //  dispatch({type:"CART",payload:e.count})
        // }



    return(
        <>
        <GlobalContext.Provider value={{transactions:state.transactions,
    add_cart,deleteF}}>


            {children}
        </GlobalContext.Provider>

        </>

     
    )
}





export default GlobalProvider



