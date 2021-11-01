import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { color } from '@mui/system';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1 style={{fontSize:"48px", color:"whitesmoke"}}>CricCards</h1>
            <Link className="link-button" to="/quick-game">
            <Button variant="contained" color="primary" size="large" style={{fontFamily: "'Candal', sans-serif"}}>Quick Game</Button>
            </Link>
            <Link className="link-button"  to="/multi-player">
            <Button  variant="contained" color="secondary" size="large" style={{fontFamily: "'Candal', sans-serif"}} >Multi-player</Button>
            </Link>
            <Link className="link-button"  to="/collection">
            <Button  variant="contained" color="success" size="large" style={{fontFamily: "'Candal', sans-serif"}} >Card Collection</Button>
            </Link>
            
        </div>
    )
}

export default HomePage
