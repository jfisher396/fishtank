import React, { useState } from "react";
import "./Tank.css";
import Fish from "../Fish/Fish";

function Tank() {
  const [fishes, setFishes] = useState([
    {
      color: "blue",
      width: 150,
    },
    {
      color: "red",
      width: 300,
    },
    {
      color: "green",
      width: 75,
    },
    {
      color: "pink",
      width: 200,
    },
  ]);

  return (
    <>
      <div className="Tank">
        {fishes.map((fish) => (
          <Fish color={fish.color} width={fish.width} />
        ))}
      </div>
      <div>
        <div className="tank-bottom"></div>
      </div>
    </>
  );
}

export default Tank;
