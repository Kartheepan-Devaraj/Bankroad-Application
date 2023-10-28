import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div>
          <div>
            <img className="image" src={props.img} alt="" />
          </div>
        </div>
        <div className="h3">
          <h3>{props.title}</h3>
        </div>
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis
          </p>
        </div>

        <div className="tags">
          <div>
            <p>{props.location}</p>
          </div>
          <div>
            <p>{props.from}</p>
          </div>
          <div>
            <p>{props.days}</p>
          </div>
        </div>
        <div>
          <p className="date">{props.date}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
