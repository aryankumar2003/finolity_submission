import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ClientSupport = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="text.primary">Client Support</Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We strive to make support as easy and well-organized as possible for you.
        </Typography>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography variant="body2" color="text.primary"><strong>Call us at:</strong> 0612-2500-971</Typography>
          <Typography variant="body2" color="text.primary"><strong>Email us:</strong> contact@finolity.com</Typography>
          <Typography variant="body2" color="text.primary">
            <a href="https://finolity.com/faq" target="_blank" rel="noopener noreferrer">Check our FAQ page</a>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            component={motion.button}
            whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(66, 165, 245, 0.5)' }}
          >
            Submit a Support Request
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientSupport;