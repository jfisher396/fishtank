import React from 'react'
import "./Fish.css"

function Fish(props) {

    const styles = {
        fish: {},
        body: {
            backgroundColor: props.color
        },
        tail: {
            background: `linear-gradient(45deg, transparent 0%, transparent 50%, ${props.color} 50%, ${props.color} 100%)`
        }
    }
    return (
        <div className="Fish" style={styles.fish}>
            <div className="tail" style={styles.tail}></div>
            <div className="body" style={styles.body}></div>
        </div>
    )
}

export default Fish
