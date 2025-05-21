// src/layout/Layout.jsx
import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onMenuClick={handleDrawerToggle} />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f4f4f4', minHeight: '100vh' }}>
        <Toolbar /> {/* pushes content below AppBar */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
