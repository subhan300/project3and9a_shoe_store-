import React from 'react'
import shoes from  "./Shoes.json"
import {Link} from "react-router-dom"
function Section2() {
//   console.log(Object.keys(shoes))
    return (
      <>
      <h1 style={{textAlign:"center",color:"red",fontWeight:"bold",margin:"20px",
padding:"20px"}}>OUR FEATURED PRODUCTS </h1>

<div class="row">

      {Object.keys(shoes).map((val)=>{console.log(shoes[val],val,"shoes[val]")
       {    const SHOES=shoes[val]
return(
     








<div class="col-md-4 mb-4">

<Link key={val} to={`Product/${val}`}>


<div class=""> 

<div class="view zoom overlay z-depth-2 rounded">
<img class="img-fluid w-100"
src={SHOES.img}
alt="Sample" />
<h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news" >Sale</span></h4>
<a href="#!">
<div class="mask">
<img class="img-fluid w-100"
src={SHOES.img}   alt=""/ >
<div class="mask rgba-black-slight"></div>
</div>
</a>    

<div class="text-center pt-">



<h6 class="mb-1">
<span class="text-danger mr-1">$12.99</span>
<span class="text-grey"><s>$36.99</s></span>
</h6>
<button type="button" class="btn btn-primary btn-sm mr-1 mb-2"><i
class="fas fa-shopping-cart pr-2">Add to cart</i></button>


  


<button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main"
data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i
class="far fa-heart"></i> Shop</button>

</div>



{/* price tag add to cart buttotm */}

</div>



</div>

</Link>
</div>
































      )}})}

</div>




       </>

    )
}

export default Section2;



