import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo1 from './logodar.png';
import profilePhoto from './profile-photo.png';
import { useAuth } from './AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/login')
    logout();
    handleMenuClose();
  };

  const menuItems = [];

  if (user) {
    menuItems.push(
      <MenuItem
        key="username"
        // disabled
        sx={{ color: 'light' }} // Ensure the username color matches the logout color
      >
        {user.username || 'User'}
      </MenuItem>,
      <MenuItem
        key="logout"
        onClick={handleLogout}
        sx={{ color: 'black' }} // Ensure the logout color matches the username color
      >
        Logout
      </MenuItem>
    );
  } else {
    menuItems.push(
      <MenuItem
        key="user-login"
        onClick={() => { handleNavigation('/login'); handleMenuClose(); }}
        sx={{ color: 'black' }} 
      >
        User Login
      </MenuItem>,
      <MenuItem
        key="admin-login"
        onClick={() => { handleNavigation('/admin-login'); handleMenuClose(); }}
        sx={{ color: 'black' }} 
      >
        Admin Login
      </MenuItem>
    );
  }

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo1} alt="logo" style={{ width: 200, height: 75 }} />
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 1 }} /> {/* Spacer */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" onClick={() => handleNavigation('/dashboard')}>Home</Button>
          <Button color="inherit" onClick={() => handleNavigation('/companies')}>Company</Button>
          <Button color="inherit" onClick={() => handleNavigation('/programming')}>Services</Button>
          <Button color="inherit" onClick={() => handleNavigation('/myjobs')}>My Jobs</Button>
          <Button color="inherit" onClick={() => handleNavigation('/aboutus')}>About</Button>
        </Box>
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <Avatar alt="Profile Photo" src={profilePhoto} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
        >
          {menuItems}
        </Menu>
      </Toolbar>
    </AppBar>
  );
} 

export default Navbar;
