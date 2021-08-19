import React from 'react'
import './Tank.css'
import Fish from "../Fish/Fish"

function Tank() {
    return (
        <div className="Tank">
            <Fish color="blue"/>
            <Fish color="purple"/>
            <Fish color="yellow"/>
        </div>
    )
}



export default Tank;