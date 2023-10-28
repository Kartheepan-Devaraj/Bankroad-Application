import React from "react";
import "./index.css";

const Heading = (props) => {
  return (
    <div>
      <div className="h2">
        <h2>
          {props.one + " "}
          <span>{props.two}</span>
        </h2>
      </div>
    </div>
  );
};

export default Heading;
