import React from 'react'
import './game_ground.css'
import GameBoard from './GameBoard';


const Playground = (props) => {
    const playerList=props.playerList;

    return (
        <div className="full-screen-playground">
            <GameBoard playerList={playerList}/>
        </div>
    )
}

export default Playground
