import React from 'react';
import PlayerCardFront from './PlayerCardFront';
import PlayerCardBack from './PlayerCardBack';
import { useState, useEffect } from 'react';


const PlayerCard = (props) => {
    const player=props.player;
    let [isFlipped, setIsFlipped] = useState(false);
    function rotationHandler()
    {
        setIsFlipped(!isFlipped);
    }
    return (
        <div className="flip-card">
                <div className={"flip-card-inner "+(isFlipped?"rotate":"rotate-again")}>
                 <PlayerCardFront player={player} onRotate={rotationHandler}/> 
                 <PlayerCardBack player={player} onRotate={rotationHandler}/>
                </div>
        </div>
        )
  
}

export default PlayerCard
