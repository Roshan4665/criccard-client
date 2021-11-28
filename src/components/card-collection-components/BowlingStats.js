import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    cursor: 'pointer',
  }));


const BowlingStats = (props) => {

    const player=props.player;
    const [selected, setSelected] = useState(0);
    return (
        <Grid container spacing={1}>
        <Grid item xs={5}  mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"matches"}); setSelected(1)}}>
            <Item style={{backgroundColor:(selected==1?"#03f8fc":"")}}>Matches: {player.bowling.matches}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"innings"}); setSelected(2)}}>
            <Item style={{backgroundColor:(selected==2?"#03f8fc":"")}}>Innings: {player.bowling.innings||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"wickets"}); setSelected(3)}}>
            <Item style={{backgroundColor:(selected==3?"#03f8fc":"")}}>Wickets: {player.bowling.wickets||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"economy"}); setSelected(4)}}>
            <Item style={{backgroundColor:(selected==4?"#03f8fc":"")}}>Economy: {player.bowling.economy||'ထ'}</Item>
        </Grid>
<Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"average"}); setSelected(5)}}>
            <Item style={{backgroundColor:(selected==5?"#03f8fc":"")}}>Average: {player.bowling.average>=100?parseInt(player.bowling.average):player.bowling.average||'ထ'}</Item>
        </Grid>
<Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"runs"}); setSelected(6)}}>
            <Item style={{backgroundColor:(selected==6?"#03f8fc":"")}}>Runs: {player.bowling.runs||'ထ'}</Item>
        </Grid>
<Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"fifers"}); setSelected(7)}}>
            <Item style={{backgroundColor:(selected==7?"#03f8fc":"")}}>Fifers: {player.bowling.fifers||'ထ'}</Item>
        </Grid>
<Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"tenfers"}); setSelected(8)}}>
            <Item style={{backgroundColor:(selected==8?"#03f8fc":"")}}>Tenfers: {player.bowling.tenfers||'ထ'}</Item>
        </Grid>
<Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"balls"}); setSelected(9)}}>
            <Item style={{backgroundColor:(selected==9?"#03f8fc":"")}}>Balls: {player.bowling.balls||'ထ'}</Item>
        </Grid>
<Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"strike_rate"}); setSelected(10)}}>
            <Item style={{backgroundColor:(selected==10?"#03f8fc":"")}}>SR: {player.bowling.strike_rate||'ထ'}</Item>
        </Grid>
<Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"best_innings"}); setSelected(11)}}>
            <Item style={{backgroundColor:(selected==11?"#03f8fc":"")}}>BBI: {player.bowling.best_innings||'ထ'}</Item>
        </Grid>
<Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"bowling", stats:"best_match"}); setSelected(12)}}>
            <Item style={{backgroundColor:(selected==12?"#03f8fc":"")}}>BBM: {player.bowling.best_match||'ထ'}</Item>
        </Grid>
        
    </Grid>    
    )
}

export default BowlingStats
