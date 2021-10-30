import React, { useState, useEffect } from 'react';

import Playground from "./components/card-collection-components/Playground";
import Navbar from "./components/card-collection-components/Navbar";
import getPlayers from './services/player';
import Loader from './components/card-collection-components/Loader';
import CollectionPage from './CollectionPage';

let playerList=[{
  name:"Please refresh",
  format:"Some Network Error Occured",
  _id:25
}];

function App() {
  const[loaded, setLoaded]=useState(false);
  // const [searchedPlayerList, setSearchedPlayerList] = useState(playerList);
 
  useEffect(()=>{
    getPlayers().then(res=>{
      playerList=res.data;
      setLoaded(true);
    })
  }, []);



  return (
    <div>
      {loaded? <CollectionPage playerList={playerList}/>:<Loader/>}
    </div>
  );
}

export default App;
