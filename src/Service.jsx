import React from "react";
import Icons from "./Icons";
import Heading from "./Heading";

const Service = () => {
  return (
    <div>
      <div className="services-div">
        <div>
          <Heading one="OUR" two="SERVICES" />
        </div>

        <div className="services-flex">
          <Icons
            img="https://endlessicons.com/wp-content/uploads/2012/11/wallet-icon.png"
            title="Saving Money"
            lorem=" Lorem ipsum dolor sit amet consectetur adipisicing elit
              Asperiores, officia."
          />
          <Icons
            img="https://endlessicons.com/wp-content/uploads/2012/11/wallet-icon.png"
            title="Endless Hiking"
            lorem=" Lorem ipsum dolor sit amet consectetur adipisicing elit
              Asperiores, officia."
          />
          <Icons
            img="https://endlessicons.com/wp-content/uploads/2012/11/wallet-icon.png"
            title="Amazing Comfort"
            lorem=" Lorem ipsum dolor sit amet consectetur adipisicing elit
              Asperiores, officia."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
