import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  }));

const BattingStats = (props) => {
    const player=props.player;
    return (
        <Grid container spacing={1}>
        <Grid item xs={5} mr={2.7}>
            <Item>Matches: {player.batting.matches||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Innings: {player.batting.innings||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Runs: {player.batting.runs||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Average: {player.batting.average||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Fifties: {player.batting.fifties||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Hundreds: {player.batting.hundreds||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Highest: {player.batting.highest_score||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>SR: {player.batting.strike_rate||'ထ'}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Fours: {player.batting.fours||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
        {
                player.format==='Test'?<Item>200s: {player.batting.double_hundreds}</Item>:<Item>Sixes: {player.batting.sixes||'ထ'}</Item>
        }
            
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Faced: {player.batting.balls_faced||'ထ'}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Not outs: {player.batting.not_outs||'ထ'}</Item>
        </Grid>
       
    </Grid>    
    )
}

export default BattingStats
