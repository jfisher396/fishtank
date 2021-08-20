import React from "react";
import "./Fish.css";

function Fish(props) {
  const height = props.width / 3;
  const styles = {
    fish: {
      width: `${props.width}px`,
      height: `${height}px`,
    },
    body: {
      backgroundColor: props.color,
      width: `${props.width * 0.7}px`,
      height: `${height}px`,
    },
    tail: {
      background: `linear-gradient(45deg, transparent 0%, transparent 50%, ${props.color} 50%, ${props.color} 100%)`,
      width: `${height}px`,
    },
  }

  return (
    <div className="Fish" style={styles.fish}>
      <div className="tail" style={styles.tail}></div>
      <div className="body" style={styles.body}></div>
    </div>
  )
}

export default Fish;
