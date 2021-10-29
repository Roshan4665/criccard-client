import React from 'react'
import './../card-back.css'

const PlayerCardBack = (props) => {
    const rotate=props.onRotate;
    return (
        <>
        <div className="player-card-back">
            <h1  onClick={()=>{rotate()}}>Hello</h1>
            </div>

        </>
    )
}

export default PlayerCardBack
