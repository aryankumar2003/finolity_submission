import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">© 2025 Finolity Consultancy Services. All Rights Reserved.</Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          {['privacy-notice', 'cookie-policy', 'investors'].map((link) => (
            <Link
              key={link}
              href={`https://finolity.com/${link}`}
              color="inherit"
              underline="none"
              component={motion.a}
              whileHover={{ scale: 1.1, color: '#42a5f5' }}
            >
              {link.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;