import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';

const team = [
  { name: 'Kumar Abhishek', role: 'Director', bio: '8+ years in tech, Google Certified Educator in Kotlin, patent holder.' },
  { name: 'Gyanender Kumar Singh', role: 'Co-President', bio: 'Scaled parent company to ₹100 crore turnover.' },
  { name: 'Kumar Himanshu', role: 'Board Member', bio: 'Expert in industrial polymer chemistry.' },
  { name: 'Rupesh Singh', role: 'Board Member', bio: '13+ years in hospitality industry leadership.' },
];

const Team = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', width: '100%' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom color="text.primary">Meet Our Leadership</Typography>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(66, 165, 245, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{ bgcolor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="h6" color="text.primary">{member.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{member.role}</Typography>
                    <Typography variant="body2" color="text.primary">{member.bio}</Typography>
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

export default Team;