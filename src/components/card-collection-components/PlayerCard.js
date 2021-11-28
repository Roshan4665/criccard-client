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


    return (
        <div className="flip-card" style={{transform: (props.gameMode?'scale(0.7)':'scale(1)'),transformOrigin:"top center", height:(props.gameMode?"308px":""), margin:(props.gameMode?'0':"")}}>
            <div className={"flip-card-inner "+ (isFlipped?"rotate-forward ":"rotate ")}>
                <PlayerCardFront class="flip-card-front"  frontInfo={props.frontInfo} player={player} gameMode={props.gameMode} onRotate={rotateHandler}/>
                <div className="thick-right"></div>
                <div className="thick-left"></div>
                  
                <PlayerCardBack class="flip-card-back" selected={props.selected} player={player} onRotate={rotateHandler} gameMode={props.gameMode} onPress={props.onPress}/>
            </div>
        </div>
    )
}

export default PlayerCard
