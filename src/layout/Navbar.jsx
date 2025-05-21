// src/layout/Navbar.jsx
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Navbar = ({ onMenuClick }) => (
  <AppBar position="fixed" color="default" elevation={1} sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={onMenuClick} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Zironyx CRM Admin
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        Welcome, Admin 👋
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
