import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const BattingStats = (props) => {
    const player=props.player;
    return (
        <Grid container spacing={1}>
        <Grid item xs={5} mr={2.7}>
            <Item>Matches: {player.batting.matches}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Innings: {player.batting.innings}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Runs: {player.batting.runs}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Average: {player.batting.average}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Fifties: {player.batting.fifties}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Hundreds: {player.batting.hundreds}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Highest: {player.batting.highest_score}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>SR: {player.batting.strike_rate}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Fours: {player.batting.fours}</Item>
        </Grid>
        <Grid item xs={5}>
        {
                player.format==='Test'?<Item>200s: {player.batting.double_hundreds}</Item>:<Item>Sixes: {player.batting.sixes}</Item>
        }
            
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Faced: {player.batting.balls_faced}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Not outs: {player.batting.not_outs}</Item>
        </Grid>
       
    </Grid>    
    )
}

export default BattingStats
