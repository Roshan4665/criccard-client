import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useState} from 'react';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    cursor: 'pointer',
  }));

const BattingStats = (props) => {
    const player=props.player;
    const [selected, setSelected] = useState(0);
    return (
        <Grid container spacing={1}>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"matches"});setSelected(13)}}>
            <Item style={{backgroundColor:(selected==13?"#03f8fc":"")}}>Matches: {player.batting.matches||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"innings"});setSelected(14)}}>
            <Item style={{backgroundColor:(selected==14?"#03f8fc":"")}}>Innings: {player.batting.innings||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"runs"});setSelected(15)}}>
            <Item style={{backgroundColor:(selected==15?"#03f8fc":"")}}>Runs: {player.batting.runs||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"average"});setSelected(16)}}>
            <Item style={{backgroundColor:(selected==16?"#03f8fc":"")}}>Average: {player.batting.average||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"fifties"});setSelected(17)}}>
            <Item style={{backgroundColor:(selected==17?"#03f8fc":"")}}>Fifties: {player.batting.fifties||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"hundreds"});setSelected(18)}}>
            <Item style={{backgroundColor:(selected==18?"#03f8fc":"")}}>Hundreds: {player.batting.hundreds||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"highest_score"});setSelected(19)}}>
            <Item style={{backgroundColor:(selected==19?"#03f8fc":"")}}>Highest: {player.batting.highest_score||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"strike_rate"});setSelected(20)}}>
            <Item style={{backgroundColor:(selected==20?"#03f8fc":"")}}>SR: {player.batting.strike_rate||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"fours"});setSelected(21)}}>
            <Item style={{backgroundColor:(selected==21?"#03f8fc":"")}}>Fours: {player.batting.fours||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"sixes"});setSelected(22)}}>
        <Item style={{backgroundColor:(selected==22?"#03f8fc":"")}}>Sixes: {player.batting.sixes||'ထ'}</Item>
            
        </Grid>
        <Grid item xs={5} mr={2.7} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"balls_faced"});setSelected(23)}}>
            <Item style={{backgroundColor:(selected==23?"#03f8fc":"")}}>Faced: {player.batting.balls_faced||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} onClick={()=>{props.onPress({_id:player._id, mode:"batting", stats:"matches", stats:"not_outs"});setSelected(24)}}>
            <Item style={{backgroundColor:(selected==24?"#03f8fc":"")}}>Not outs: {player.batting.not_outs||'ထ'}</Item>
        </Grid>
       
    </Grid>    
    )
}

export default BattingStats
