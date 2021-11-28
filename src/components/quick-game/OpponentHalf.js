import React from 'react'
import ModifiedCard from './ModifiedCard';
import { useEffect, useState } from 'react';
import selecting from './Selecting.gif'
import waiting from './Waiting.gif'
import { display } from '@mui/system';

const OpponentHalf = (props) => {
    const player = props.player;
    useEffect(() => {
        const div = document.getElementById('opp-card');
        div.classList.add( 'op-into-the-screen');
        div.addEventListener('animationend', () => {
            div.classList.remove( 'op-into-the-screen');
        });
    }, [player]);
  
    return (
        <div className="opponent-half " >

            <div className="hide-bg" style={{display:(props.isBlur?"flex":"none"), alignItems:"center", justifyContent:"center"}} >
                <img src={props.isSelecting?selecting:waiting} alt="status" />
            </div>
            <div className="centre-align" id="opp-card" style={{pointerEvents:"none"}}>
            <ModifiedCard frontInfo={props.frontInfo} player={player}  />
            </div>
        </div>
    )
}

export default OpponentHalf
