import React from 'react'
import PlayerCard from './../card-collection-components/PlayerCard'
import { useState } from 'react';

const ModifiedCard = (props) => {
    const player = props.player;
   
    return (
        <div className="h-centre">
          
            <PlayerCard player={player} frontInfo={props.frontInfo} gameMode={true} selected={props.onClick} onPress={(data)=>{props.handleSelectedStat(data)}}/>
        </div>
         
    )
}

export default ModifiedCard
