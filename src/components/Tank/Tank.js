import React, { useState, useEffect } from "react";
import "./Tank.css";
import Fish from "../Fish/Fish";
import API from "../../utils/API"

function Tank() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
      API.getAllFish().then((res) => {
          setFishes(res.data)
      })
  }, [])

  return (
    <>
      <div className="Tank">
        {fishes.map((fish) => (
          <Fish key={fish.width} color={fish.color} width={fish.width} />
        ))}
      </div>
      <div>
        <div className="tank-bottom"></div>
      </div>
    </>
  );
}

export default Tank;
