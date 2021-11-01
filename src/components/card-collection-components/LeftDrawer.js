import React from 'react'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import image from './images/gogeta.jpg'
import './components-css/drawer.css'
import Divider from '@mui/material/Divider';
import { ButtonBase } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const LeftDrawer = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
            <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
               <div className="user-profile">
                <img alt="profile" src={image} className="avatar"/>
                <Divider/>
                <ButtonBase className="drawer-item"><h2>Sign In </h2></ButtonBase>
                 <Divider/>
                 <ButtonBase className="drawer-item"><h2>My Cards </h2></ButtonBase>
                 <Divider/>
                 <ButtonBase className="drawer-item"><h2>Card of the day </h2></ButtonBase>
                 <Divider/>
                 <ButtonBase className="drawer-item"><h2>Settings </h2></ButtonBase>
                 <Divider/>
                 <ButtonBase className="drawer-item"><h2>Contact us </h2></ButtonBase>
                 <Divider/>
               </div>
               <div className="bottom-info-bar">
                   <h1>©️ CricCards</h1>
               </div>
            </Drawer>

        </>
    )
}

export default LeftDrawer
