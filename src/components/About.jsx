import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="text.primary">About Us</Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Finolity is dedicated to crafting and delivering innovative solutions to customers, ensuring complete client success. We pioneer technology, providing cutting-edge digital experiences, fostering financial inclusion, and transforming the industry through technology-driven excellence for sustainable growth and global impact.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: 'center' }}>
          {['7+ Years Proven Track Record', '98% Client Satisfaction', 'Global Team of Experts'].map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, color: '#42a5f5' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Typography variant="h6" color="text.primary">{stat}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;