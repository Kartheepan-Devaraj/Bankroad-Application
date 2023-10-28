import React from "react";
import Heading from "./Heading";
import Button from "./Button";

const About = () => {
  return (
    <div className="about">
      <div>
        <Heading one="ABOUT" two="US" />
      </div>

      <div className="content2">
        <div className="heading">Explore The Difference</div>
        <div className="lorem">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor? <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor? <br />
            <br />
          </p>
        </div>

        <div>
          <Button text="READ MORE" className="btn2" />
        </div>

        <div>
          <img
            className="nature"
            src="https://backroads-app.netlify.app/static/media/about.7e8676e80c8ecf02ba4f.jpeg"
            alt=""
          />
        </div>

        <div className="border"></div>
      </div>
    </div>
  );
};

export default About;
