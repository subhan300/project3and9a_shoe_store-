import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left " style={{color:"black"}}> 
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title" style={{color:"purple",fontWeight:"bold"}}>COMPANY OF NEWYORK</h5>
            <p style={{color:"black",fontWeight:"bold"}}>
            siness text messaging is a service that allows organizations 
            to utilize SMS messaging for customer support, recruiting,
             sales and more. Business SMS messaging helps scale processes and simplify internal 
             communications.</p>
          
          </MDBCol>

         
          <MDBCol md="4">
            <h5 className="title" style={{color:"purple",fontWeight:"bold"}}>Social Network</h5>
            <ul>
              <li className="listUnstyled">
                <a href="#!" style={{color:"black",fontWeight:"bold"}}>Facebook</a>
              </li>
              <li className="listUnstyled">
                <a href="#!" style={{color:"black",fontWeight:"bold"}}>whatsapp</a>
              </li>
              <li className="listUnstyled">
                <a href="#!" style={{color:"black",fontWeight:"bold"}}>twitter</a>
              </li>
         
            </ul>
          </MDBCol>

  


          <MDBCol md="4">
            <h5 className="title"  style={{color:"purple",fontWeight:"bold"}}>WHERE ARE WE?</h5>
            <ul>
            <li className="listUnstyled">
                <a href="#!" style={{color:"black",fontWeight:"bold"}}>Near five star, block : d North Nazimabad
                karachi .</a>
              </li>
              <li className="listUnstyled">
                <a href="#!" style={{color:"black",fontWeight:"bold"}}>Phone: 033-0388384</a>
              </li>
              <li className="listUnstyled">
                <a href="#!" style={{color:"black",fontWeight:"bold"}}>Gmail:subhan.akram2400@gmail.com</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>






      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> 
           SUBHAN AKRAM PRODUCTION  </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;