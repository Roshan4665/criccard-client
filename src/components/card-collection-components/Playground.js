import React from 'react'
import PlayerCard from "./PlayerCard";
const Playground = (props) => {
    return (
        <div className="playground">
           {CreateCards(props.playerList)}
        </div>
         
    )
}

const CreateCards=(playerList)=>
{
    let cards=[];
    for(const player of playerList)
    {
        cards.push(
        <PlayerCard key={player._id} player={player}/>);
    }
    return cards;
}

export default Playground
