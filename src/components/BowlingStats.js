import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  }));


const BowlingStats = (props) => {

    const player=props.player;
    const [selected, setSelected] = useState(false);
    return (
        <Grid container spacing={1}>
        <Grid item xs={5} mr={2.7}>
            <Item>Matches: {player.bowling.matches}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Innings: {player.bowling.innings||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Wickets: {player.bowling.wickets||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Economy: {player.bowling.economy||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Average: {player.bowling.average>=100?parseInt(player.bowling.average):player.bowling.average||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Runs: {player.bowling.runs||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Fifers: {player.bowling.fifers||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Tenfers: {player.bowling.tenfers||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Balls: {player.bowling.balls||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>SR: {player.bowling.strike_rate||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>BBI: {player.bowling.best_innings||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>BBM: {player.bowling.best_match||'ထ'}</Item>
        </Grid>
        
    </Grid>    
    )
}

export default BowlingStats
