import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Container, Typography, Button, useTheme } from '@mui/material';

const IntroductionPage = () => {
  const theme = useTheme();

  const handleButtonClick = () => {
    // Scroll down by 100 pixels
    window.scrollBy({
      top: 1200,
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div>
        <Typography variant="h2" gutterBottom>Welcome to Advanced Metering Solutions East Africa</Typography>
        <Typography variant="body1" paragraph>
          We specialize in providing cutting-edge technology solutions for urban livestock farmers and small-scale crop farmers. Our innovative products leverage AI and data analytics to optimize farming practices and enhance productivity in challenging environments.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>Explore our products</Button>
      </div>
    </Container>
  );
};

export default IntroductionPage;
