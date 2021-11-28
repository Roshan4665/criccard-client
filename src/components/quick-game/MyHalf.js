import React from 'react'
import ModifiedCard from './ModifiedCard';
import { useEffect, useState } from 'react';
const MyHalf = (props) => {
    const player = props.player;
    //add a animation class to div on new props update with useeffect
    useEffect(() => {
        const div = document.getElementById('my-card');
        div.classList.add( 'into-the-screen');
        div.addEventListener('animationend', () => {
            div.classList.remove( 'into-the-screen');
        });
    }, [player]);
    const [isClickable, setIsClickable] = useState(true);
    return (
        <>
        <div className="my-half" >
              <div id="my-card" style={{pointerEvents:(props.isMyTurn?"auto":"none")}} className="centre-align">
            <ModifiedCard frontInfo={props.frontInfo} handleSelectedStat={(data)=>props.handleSelectedStat(data)} onClick={()=>{setIsClickable(false); props.onSelected()}} isClickable={isClickable} player={player} />
            </div>
        </div>
        </>
    )
}

export default MyHalf
