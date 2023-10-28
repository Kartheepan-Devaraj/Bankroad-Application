import React from "react";

const Image = (props) => {
  return (
    <div>
      <img src={props.src} className={props.className} />
    </div>
  );
};

export default Image;
