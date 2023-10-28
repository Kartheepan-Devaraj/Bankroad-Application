import React from "react";
import Navbar1 from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Tours from "./Tours";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </div>
  );
};

export default App;
