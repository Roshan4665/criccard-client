import React from 'react'
import './components-css/card-back.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { useState } from 'react';
import BatIcon from './images/cricket-bat.png';
import BallIcon from './images/cricket-ball.png';
import Player from './../playerDBModel';
import BattingStats from './BattingStats';
import BowlingStats from './BowlingStats';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#34eb3d',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});








const PlayerCardBack = (props) => {
    const rotate = props.onRotate;
    let player = Player;
    player = props.player;
    const [IsBatting, setIsBatting] = useState(true);




    return (
        <>
            <div className="player-card-back">

                <div className="rotated-y-container" >
                    <div className="back-icon-circle" onClick={() => { rotate() }}>
                        <ArrowBackIosIcon className="back-icon" />
                    </div>
                    <div className="player-name">
                        {player.name}
                    </div>
                    <div className="batting-selector-column">
                   <ThemeProvider theme={theme}>   <Button variant={IsBatting ? "contained" : "outlined"} color="primary" onClick={() => setIsBatting(true)} className="mui-button"> Batting <img src={BatIcon} /></Button></ThemeProvider>
                   <ThemeProvider theme={theme}>        <Button variant={IsBatting ? "outlined" : "contained"} color="primary" onClick={() =>  setIsBatting(false) } className="mui-button">Bowling <img src={BallIcon} style={{transform:"scale(0.9)"}}/></Button></ThemeProvider>
                    </div>
                    <div className="stats">
                        <div className="batting-stats">
                            {IsBatting?
                                <BattingStats player={player}/>:
                            <BowlingStats player={player}/>
                            }

                        </div>
                    </div>



                    <div className="bottom-bar">
                        1000 🪙
                    </div>




                </div>
            </div>




        </>
    )
}

export default PlayerCardBack
