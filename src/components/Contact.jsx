import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Add backend logic here)');
  };

  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="text.primary">Contact Us</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" required sx={{ bgcolor: 'background.paper' }} />
          <TextField label="Email" type="email" variant="outlined" required sx={{ bgcolor: 'background.paper' }} />
          <TextField label="Message" multiline rows={4} variant="outlined" required sx={{ bgcolor: 'background.paper' }} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            component={motion.button}
            whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(66, 165, 245, 0.5)' }}
          >
            Send Inquiry
          </Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.primary"><strong>Toll-Free:</strong> 1800-203-9983</Typography>
          <Typography variant="body2" color="text.primary"><strong>Phone:</strong> 0612-2500-971</Typography>
          <Typography variant="body2" color="text.primary"><strong>Email:</strong> contact@finolity.com</Typography>
          <Typography variant="body2" color="text.primary"><strong>Address:</strong> R-7 Street O-C Choudhary Colony, Yamunanagar, Haryana, India</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;