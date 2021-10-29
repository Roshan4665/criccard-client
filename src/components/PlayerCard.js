import React from 'react'
import PlayerCardFront from './PlayerCardFront'

const PlayerCard = (props) => {
    const player=props.player;

    return (

         <PlayerCardFront player={player}/>
    )
}

export default PlayerCard
