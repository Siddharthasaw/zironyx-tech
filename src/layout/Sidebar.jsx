import React from 'react';
import { 
  Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, ListItemButton 
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import {
  Dashboard, People, Folder, Receipt, SupportAgent,
  Build, Group, Notifications, Settings, Logout
} from '@mui/icons-material';

const drawerWidth = 240;
const menuItems = [
  { text: "Dashboard",     icon: <Dashboard />,     path: "/dashboard" },
  { text: "Clients",       icon: <People />,        path: "/clients" },
  { text: "Projects",      icon: <Folder />,        path: "/projects" },
  { text: "Invoices",      icon: <Receipt />,       path: "/invoices" },
  { text: "Tickets",       icon: <SupportAgent />,  path: "/tickets" },
  { text: "Services",      icon: <Build />,         path: "/services" },
  { text: "Staff",         icon: <Group />,         path: "/staff" },
  { text: "Notifications", icon: <Notifications />, path: "/notifications" },
  { text: "Settings",      icon: <Settings />,      path: "/settings" },
  { text: "Logout",        icon: <Logout />,        path: "/logout" },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#121212',
          color: '#fff'
        }
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map(item => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
            >
              <ListItemIcon sx={{ color: '#00bcd4' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
