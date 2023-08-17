import React, { Component } from "react";
import Navbar from "./component/navbar";
import Main from "./component/main";
import Footer from "./component/footer";
import "./css/style.css";
import Home from "./component/home";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        {/* <Navbar />
        <Main />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
