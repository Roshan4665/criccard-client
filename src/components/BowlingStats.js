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

const BowlingStats = (props) => {

    const player=props.player;
    return (
        <Grid container spacing={1}>
        <Grid item xs={5} mr={2.7}>
            <Item>Matches: {player.bowling.matches}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Innings: {player.bowling.innings}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Wickets: {player.bowling.wickets}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Economy: {player.bowling.economy}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Average: {player.bowling.average}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Runs: {player.bowling.runs}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Fifers: {player.bowling.fifers}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>Tenfers: {player.bowling.tenfers}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>Balls: {player.bowling.fifers}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>SR: {player.bowling.strike_rate}</Item>
        </Grid>
        <Grid item xs={5} mr={2.7}>
            <Item>BBI: {player.bowling.best_innings}</Item>
        </Grid>
        <Grid item xs={5}>
            <Item>BBM: {player.bowling.best_match}</Item>
        </Grid>
        
    </Grid>    
    )
}

export default BowlingStats
