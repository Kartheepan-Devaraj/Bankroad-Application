import React from "react";
import "./index.css";

const Icons = (props) => {
  return (
    <>
      <div className="services">
        <div>
          <span className="icons">
            <img className="wallet" src={props.img} alt="" />
          </span>
        </div>
        <div>
          <div>
            <h3 className="service-content">{props.title}</h3>
          </div>
          <div className="service-lorem">
            <p>{props.lorem}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
