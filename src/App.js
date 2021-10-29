import React, { useState, useEffect } from 'react';

import Playground from "./components/Playground";
import Navbar from "./components/Navbar";
import getPlayers from './services/player';
import Loader from './components/Loader';


let playerList=[{
  name:"Please refresh",
  format:"Some Network Error Occured",
  _id:25
}];
let initialPlayerList=[];

function App() {
  const[loaded, setLoaded]=useState(false);
  const [searchedPlayerList, setSearchedPlayerList] = useState(playerList);
 
  useEffect(()=>{
    getPlayers().then(res=>{
      let newList=res.data;
      playerList=newList;
      //initially load 8 random players
      initialPlayerList=[newList[0], newList[4], newList[23], newList[59], newList[31], newList[33], newList[51]];
      setSearchedPlayerList(initialPlayerList);
      setLoaded(true);
    })
  }, []);
  const searchPlayer=(name)=>
  {
     if(name==="")
     {
       setSearchedPlayerList(initialPlayerList);
       return;
     }

    let tempPlayerList=[];
    for(let i=0;i<playerList.length;i++)
    {
      let player=playerList[i];
      let currentPlayerName=player.name;
      currentPlayerName=currentPlayerName.toLowerCase();
      name=name.toLowerCase();
      if(currentPlayerName.includes(name)||name.includes(currentPlayerName))
      {
        tempPlayerList.push(player);
      }
    }
    setSearchedPlayerList(tempPlayerList);
  }
  


  return (
    <div>
      <Navbar search={searchPlayer}/>
      {loaded? <Playground playerList={searchedPlayerList}/>:<Loader/>}
    </div>
  );
}

export default App;
