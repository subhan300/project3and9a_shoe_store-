import React,{useContext,useState} from 'react'
import {GlobalContext} from "./GlobalContext.js"
function Cart() {
    const {transactions}=useContext(GlobalContext)

    const {deleteF} = useContext(GlobalContext)
    // console.log("TRANSACTIONNADD",transactions.price)
    const Amount=transactions.map((e)=>{return(e.price)})
    console.log("AMOUNT",Amount)
    
    return (
        <div>
          

         
         
             
          {transactions.map((v)=>{return(<>
          <div class="card">
          <div class="card-body row" >
              <div class="col-5 ">
                  <img src={v.img} style={{height:"140px"}}></img>
          <div style={{fontWeight:"bold"}}>{v.name}</div>
                  </div>
          <div class="col-5" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
             
    <button style={{textAlign:"center"}}>BUT IT NOW<span style={{marginLeft:"5px"}}>$1200</span></button>
         

         
          
          
          </div>
          <div  class="col-2" onClick={()=>{deleteF(v.id)}}>x</div>
          
          
           </div>
           </div>

          </>)})} 

          
          <div style={{padding:"20px",margin:"20px"}}><h5>total bill :<span>{Amount.reduce((acc,item)=>
          acc +=item,0)}</span>  </h5> </div>
        

        </div>
    )
}

export default Cart
