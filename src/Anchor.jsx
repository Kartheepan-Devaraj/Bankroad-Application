import React from "react";

const Anchor = (props) => {
  return (
    <div>
      <a href={props.href}>{props.text}</a>
    </div>
  );
};

export default Anchor;
