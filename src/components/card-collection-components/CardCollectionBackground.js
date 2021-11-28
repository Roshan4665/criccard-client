import React from 'react'
import PlayerCard from "./PlayerCard";
import Navbar from './Navbar';
import { useState } from 'react';
const CardCollectionBackground = (props) => {
    const playerList = props.playerList;
    let initialPlayerList=[playerList[0], playerList[4], playerList[23], playerList[59], playerList[31], playerList[33], playerList[51], playerList[47]];
    const [searchedPlayerList, setSearchedPlayerList] = useState(initialPlayerList);


    //code to check if a string contains other or vice versa return true if it contains irrespective of case
    const searchPlayer = (name) => {
        if (name === "") {
            setSearchedPlayerList(initialPlayerList);
            return;
        }
        let tempPlayerList = [];
        for (let i = 0; i < playerList.length; i++) {
            let player = playerList[i];
            let currentPlayerName = player.name;
            currentPlayerName = currentPlayerName.toLowerCase();
            name = name.toLowerCase();
            if (currentPlayerName.includes(name) || name.includes(currentPlayerName)) {
                tempPlayerList.push(player);
            }
        }
        setSearchedPlayerList(tempPlayerList);
    }

    return (
        <>
        <Navbar search={searchPlayer}/>
        <div className="playground">
           {CreateCards(searchedPlayerList)}
        </div>
        </>
         
    )
}

const CreateCards=(playerList)=>
{
    let cards=[];
    for(const player of playerList)
    {
        cards.push(
        <PlayerCard key={player._id} player={player} gameMode={false} onPress={()=>{}}/>);
    }
    return cards;
}

export default CardCollectionBackground;
