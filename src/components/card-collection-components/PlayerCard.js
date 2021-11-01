import React from 'react'
import PlayerCardFront from './PlayerCardFront'
import PlayerCardBack from './PlayerCardBack'
import './components-css/rotatable-card.css'
import { useState } from 'react'

const PlayerCard = (props) => {
    const player = props.player;
    const [isFlipped, setIsFlipped] = useState(false);
    function rotateHandler() {
        setIsFlipped(!isFlipped);
    }
    let light=false;
    if(player.batting.runs>10000)
    light=true;

    return (
        <div className="flip-card">
            <div className={"flip-card-inner "+ (isFlipped?"rotate-forward ":"rotate ")}>
                <PlayerCardFront class="flip-card-front" player={player} onRotate={rotateHandler}/>
                <div className="thick-right"></div>
                <div className="thick-left"></div>
                  
                <PlayerCardBack class="flip-card-back" player={player} onRotate={rotateHandler}/>
            </div>
        </div>
    )
}

export default PlayerCard
