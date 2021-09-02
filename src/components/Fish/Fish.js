import React from "react";
import "./Fish.css";

function Fish(props) {

  // CSS styling for fish; comes from state in the tank component
  const height = props.width / 3;
  const styles = {
    fish: {
      width: `${props.width}px`,
      height: `${height}px`,
    },
    body: {
      backgroundColor: props.color1,
      width: `${props.width * 0.7}px`,
      height: `${height}px`,
    },
    tail: {
      background: `linear-gradient(45deg, transparent 0%, transparent 50%, ${props.color1} 50%, ${props.color1} 100%)`,
      width: `${height}px`,
    },
  }

  // rendering of fish components
  return (
    <div className="Fish" style={styles.fish}>
      <div className="tail" style={styles.tail}></div>
      <div className="body" style={styles.body}></div>
    </div>
  )
}

export default Fish;
