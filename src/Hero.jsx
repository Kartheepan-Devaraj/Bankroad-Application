import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="content">
      <div>
        <h1 className="text1">CONTINUE EXPLORING</h1>
      </div>
      <div>
        <p className="text2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Vitae explicabo debitis est autem dicta.
        </p>
      </div>
      <div>
        <Button className="btn" text="EXPLORE TOURS" />
      </div>
    </div>
  );
};

export default Hero;
