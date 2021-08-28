import React, { useState, useEffect } from "react";
import "./Tank.css";
import Fish from "../Fish/Fish";
import API from "../../utils/API"

function Tank(props) {

  // console.log(props.fishFromDb)
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
      API.getAllFish().then((res) => {
          console.log(res.data)
          setFishes(res.data)
      })
  }, [props.fishFromDb])

  return (
    <>
      <div className="Tank">
        {fishes.map((fish) => (
          <Fish key={fish.id} color1={fish.color1} color2= {fish.color2} width={fish.width} />
        ))}
      </div>
      <div>
        <div className="tank-bottom"></div>
      </div>
    </>
  );
}

export default Tank;
