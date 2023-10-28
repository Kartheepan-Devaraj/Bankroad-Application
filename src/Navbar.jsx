import React from "react";
import Anchor from "./Anchor";
import Social from "./Social";
import Image from "./Image";
import "./index.css";
const Navbar1 = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav">
          <div className="logo">
            <Image
              className="img-logo"
              src="https://backroads-app.netlify.app/static/media/logo.08d970fd0ddb0af90a9c60fb965e56d2.svg"
            />
          </div>

          <div className="anc">
            lin
            <div>
              <link to="hero" smooth={true} duration={500}>
                Hero
              </link>
            </div>
            <div>
              <Anchor href="#about" text="About" />
            </div>
            <div>
              <Anchor text="Services" />
            </div>
            <div>
              <Anchor text="Tours" />
            </div>
          </div>

          <div className="nav-social">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
