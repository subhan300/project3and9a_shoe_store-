import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from "./Home.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Product from "./Product.js"
import ProductItem from "./ProductItem.js"
import Error from "./Error.js"
import Navbar from "./Navbar.js"
import Shop from "./Shop.js"
import Cart from "./Cart.js"
import Section2 from "./Section2.js"


function ChangePages() {
    return (
        <div>
             <Router>
                 <Navbar/>
          
           <Switch>
         
               <Route exact path="/" component={Home}></Route>
               <Route path="/About" component={About}></Route>
               <Route path="/Contact" component={Contact}></Route>
               <Route exact path="/Product" component={Product}></Route>
               <Route path="/Product/:id" component={ProductItem}></Route>
               <Route path="/Cart" component={Cart}></Route>
               <Route path="/Shop" component={Shop}></Route>
               <Route path="*" component={Error}/>
           </Switch>
       </Router>
            
        </div>
    )
}

export default ChangePages
