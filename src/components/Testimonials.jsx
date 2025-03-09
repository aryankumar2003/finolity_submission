import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Finolity implemented such a powerful platform that we had no break in service during the COVID-19 pandemic.', author: 'Prateek Kashyap, Director, Pyramidfabcon Eventmanager Pvt Ltd' },
  { quote: 'Finolity is an example of the way Managed Services should be done. They do their very best to make sure you succeed.', author: 'Shivam Rana, CIO, Kailasa Pictures' },
];

const Testimonials = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="text.primary">What Our Clients Say</Typography>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(66, 165, 245, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{ bgcolor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="body1" color="text.primary" paragraph>"{testimonial.quote}"</Typography>
                    <Typography variant="subtitle2" color="text.secondary">— {testimonial.author}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;