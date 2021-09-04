import React, { useState, useEffect } from "react";
import "./Tank.css";
import Fish from "../Fish/Fish";
import API from "../../utils/API";

function Tank(props) {
  // holds fish from DB in state
  const [fishes, setFishes] = useState([]);

  // retrieves fishes from DB and sets them to state;
  // refreshes every time the DB is updated; props come from the app component
  useEffect(() => {
    API.getAllFish().then((res) => {
      setFishes(res.data);
    });
  }, [props.fishFromDb]);

  // renders the tank component
  return (
    <>
      <div className="Tank">
        {/*maps over the fish array from state and renders them to page; 
          sends props to the fish component*/}
        {fishes.map((fish) => (
          <Fish
            key={fish.id}
            color1={fish.color1}
            color2={fish.color2}
            width={fish.width}
          />
        ))}
      </div>
      <div>
        <div className="tank-bottom"></div>
      </div>
    </>
  );
}

export default Tank;
