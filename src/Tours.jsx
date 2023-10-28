import React from "react";
import data from "./data";
import Card from "./Card";
import Heading from "./Heading";

const Tours = () => {
  return (
    <div>
      <div>
        <div>
          <Heading one="FEATURED" two="TOURS" />
        </div>
        <div className="card-grid">
          {data.map((item) => {
            return (
              <Card
                img={item.img}
                date={item.date}
                title={item.title}
                location={item.location}
                from={item.from}
                days={item.days}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tours;
