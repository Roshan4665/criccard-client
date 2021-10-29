
import eye from './images/eye.png';
import './../card-front.css';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PlayerCardFront = (props) => {
    const player=props.player;
    const [fav, setfav] = useState(false);
    const [favCount, setfavCount] = useState(120);
    return (
    
        <div className="player-card">
            <div className="click-register" onClick={()=>{console.log("clicked");}}/>
            <img src={`https://res.cloudinary.com/dfwh8gb6y/image/upload/v1635448141/${parseInt(player._id)}.png`} alt="player" className="card-img"/>
         
            <div className="overlay"/>
            <div className="player-details">
               <h3> {player.name}</h3>
               <h4>{player.format}</h4>
               <div className="view-count">
               
                   <img src={eye} className="view-icon" alt="views-icon"/>
                   256
               </div>
               <div className="favourite-selection">
                  { fav?<FavoriteIcon className="heart-icon" key={`${player._id}heart`} onClick={()=>{setfav(false); setfavCount(favCount-1)}}/>:<FavoriteBorderIcon className="heart-icon" onClick={()=>{setfav(true); setfavCount(favCount+1)}} />}
                   {favCount}
               </div>
            </div>
        </div>


    )
}

export default PlayerCardFront
