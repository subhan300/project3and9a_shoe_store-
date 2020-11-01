import React, { Component } from "react";
import Navbar from "./Navbar.js"
import "./index.css";
import ChangePages from "./ChangePages.js"
import GlobalProvider from "./GlobalContext.js"

class App extends Component {
  render() {
    return (
     <>
    <GlobalProvider>

  <ChangePages />
  </GlobalProvider>
 
     </>
    );
  }
}

export default App;
