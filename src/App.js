import React, { useEffect } from "react";
import "./css/style.css";
import Home from "./component/home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
