import React from 'react'
import Playground from './components/quick-game/Playground'


const QuickGamePage = (props) => {
    const playerList=props.playerList;


    return (
        <div>
            <Playground playerList={playerList} />

        </div>
    )
}

export default QuickGamePage
