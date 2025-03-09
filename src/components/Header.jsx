import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar>
        <Typography variant="h6" color="text.primary" sx={{ flexGrow: 1 }}>
          Finolity Consultancy Services
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => scrollToSection('hero')}>Home</Button>
          <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
          <Button color="inherit" onClick={() => scrollToSection('services')}>Services</Button>
          <Button color="inherit" onClick={() => scrollToSection('team')}>Team</Button>
          <Button color="inherit" onClick={() => scrollToSection('client-support')}>Client Support</Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
          <Button color="inherit" href="https://finolity.com/careers" target="_blank">Careers</Button>
          <Button variant="contained" color="primary">Consult Our Experts</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;