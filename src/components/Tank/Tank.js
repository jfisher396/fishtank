import React from "react";
import "./Tank.css";
import Fish from "../Fish/Fish";

function Tank() {
  return (
    <div className="Tank">
      <Fish color="blue" width={150}/>
      <Fish color="purple" width={300}  />
      <Fish color="yellow" width={75} />
    </div>
  );
}

export default Tank;
