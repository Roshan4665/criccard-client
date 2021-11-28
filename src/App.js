import React, { useState, useEffect } from 'react';
import getPlayers from './services/player';
import Loader from './components/card-collection-components/Loader';
import CollectionPage from './CollectionPage';
import HomePage from './HomePage';
import QuickGamePage from './QuickGamePage';
import MultiPlayerPage from './MultiPlayerPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


let playerList=[{
  name:"Please refresh",
  format:"Some Network Error Occured",
  _id:25
}];

function App() {
  const[loaded, setLoaded]=useState(false);
 
  useEffect(()=>{
    getPlayers().then(res=>{
      playerList=res.data;
      setLoaded(true);
    })
  }, []);


//    
  return (
      <Router>
        <Switch>
          <Route path="/collection">
          {loaded? <CollectionPage playerList={playerList}/>:<Loader/>}
          </Route>
          <Route path="/quick-game">
          {loaded? <QuickGamePage playerList={playerList}/>:<Loader/>}
          </Route>
          <Route path="/multi-player">
            <MultiPlayerPage playerList={playerList}/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
