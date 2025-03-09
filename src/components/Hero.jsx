import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom color="text.primary">
          Consulting | IT Services | Digital Engineering
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          FCS, a renowned global leader in IT services, consulting, and business solutions, utilizes cutting-edge technology to drive transformative & catalyze innovation.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={motion.button}
            whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(66, 165, 245, 0.5)' }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={motion.button}
            whileHover={{ scale: 1.1, borderColor: '#f06292', boxShadow: '0px 4px 15px rgba(240, 98, 146, 0.5)' }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;