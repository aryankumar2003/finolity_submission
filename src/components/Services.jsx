import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  { title: 'Cloud', desc: 'Customized cloud platform designed to improve performance, lower IT costs, and provide secure access to your data.' },
  { title: 'IoT and Digital Engineering', desc: 'Next-generation solutions for the 5G era and beyond.' },
  { title: 'Consulting', desc: 'Strategic insights to stay ahead of the competition.' },
  { title: 'Data and Analytics', desc: 'Tailored dashboard solutions for insightful data visualization.' },
  { title: 'Cybersecurity', desc: 'Robust measures to safeguard your systems and data.' },
  { title: 'Application Development', desc: 'Custom apps to streamline operations and enhance growth.' },
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="text.primary">Services</Typography>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(66, 165, 245, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{ height: '200px', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="text.primary">{service.title}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {service.desc}
                    </Typography>
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

export default Services;