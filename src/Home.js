import React ,{createContext,useState}from 'react'
import Section1 from "./Section1.js"
import Section2 from "./Section2.js"
import FooterPage from "./Footer.js"


function Home() {
  
 
    return (
        <div>
          
             <Section1/>
             <Section2 />

             < FooterPage />
           
  
        </div>
    )
}

export default Home
