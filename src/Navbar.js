import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {GlobalContext} from "./GlobalContext.js"
function Navbar() {
  const {transactions}=useContext(GlobalContext)
  console.log("kkkkkk",transactions)
  const CARTWALA=transactions.map((e)=>{return(e.count)})
  console.log(CARTWALA)
  const ALLCARTVALUES=CARTWALA.reduce((acc,items)=>acc +=items,0)
  console.log(ALLCARTVALUES)
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light">

<a class="navbar-brand" href="#!">
  <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30" alt="mdb logo">
</img>

</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
  aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>



<div class="collapse navbar-collapse" id="basicExampleNav1">
    

  <ul class="navbar-nav ml-auto">
   
    {/* YAHA SA FLAG HAI */}
    {/* <li class="nav-item dropdown">
        









      <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="true">





        <i class="united kingdom flag m-0"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#!">Action</a>
        <a class="dropdown-item" href="#!">Another action</a>
        <a class="dropdown-item" href="#!">Something else here</a>
      </div>
    </li> */}
    {/* FLAG HAI YEH */}

    <li class="nav-item">
     <Link to="/" class="nav-link waves-effect">Home</Link>
    </li>

    <li class="nav-item">
      {/* <a href="#!" class="nav-link waves-effect">
        About Us
      </a> */}
      <Link to="/About"  class="nav-link waves-effect">About Us</Link>
    </li>
   
    <li class="nav-item">
      
    <Link to="/Contact"  class="nav-link waves-effect">Contact Us</Link>
      
    </li>


    <li class="nav-item">
    <Link to="/Shop"  class="nav-link waves-effect">Shop</Link>
    </li>
   
    <li class="nav-item">
      <a href="#!" class="nav-link waves-effect">
        Sign in
      </a>
    </li>
    <li class="nav-item">
    <Link to="/Cart"  class="nav-link waves-effect">
    <span class="badge badge-pill red">{ALLCARTVALUES}</span>
        <i class="fas fa-shopping-cart pl-0"></i>
      </Link>
    </li>






    <li class="nav-item pl-2 mb-2 mb-md-0">
      <a href="#!" type="button"
        class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
    </li>
  </ul>

</div>


</nav>
            
        </div>
    )
}

export default Navbar
