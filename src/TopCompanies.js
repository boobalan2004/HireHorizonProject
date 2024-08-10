// TopCompanies.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Grid, Typography, Card, CardContent, CardMedia, Container, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const companies = [
  {
    name: 'Sterlite Technologies (STL)',
    reviews: '3.8',
    reviewsCount: '2K+ reviews',
    type: 'Indian MNC',
    sector: 'Hardware & Networking',
    img: 'stl.jpg', // replace with appropriate image path
  },
  {
    name: 'Stefab',
    reviews: '4.2',
    reviewsCount: '27 reviews',
    type: 'Others',
    sector: 'Industrial Equipment / Machinery',
    img: 'stefab.jpg', // replace with appropriate image path
  },
  // Add more companies as needed
];

const TopCompanies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4">Top Companies Hiring Now</Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px', justifyContent: 'center' }}>
        {categories.map((category, index) => (
          <Grid item key={index}>
            <Button variant="contained" color="primary">
              {category.name} <br /> {category.count}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'left',paddingLeft:10 }}>
            <Typography variant="h6">All Filters</Typography>
            <FormGroup>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>Company type</Typography>
              <FormControlLabel control={<Checkbox />} label="Corporate (3671)" />
              <FormControlLabel control={<Checkbox />} label="Foreign MNC (1327)" />
              <FormControlLabel control={<Checkbox />} label="Indian MNC (622)" />
              <FormControlLabel control={<Checkbox />} label="Startup (420)" />
            </FormGroup>
            <FormGroup>
              <Typography variant="body1" sx={{ marginTop: '10px' }}>Location</Typography>
              <FormControlLabel control={<Checkbox />} label="Location 1" />
              <FormControlLabel control={<Checkbox />} label="Location 2" />
              <FormControlLabel control={<Checkbox />} label="Location 3" />
              <FormControlLabel control={<Checkbox />} label="Location 4" />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Slider {...settings}>
            {companies.map((company, index) => (
              <Card key={index} sx={{ margin: '0 10px', border: '1px solid black', width: '90%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={company.img}
                  alt={company.name}
                />
                <CardContent>
                  <Typography variant="h6">{company.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.reviews} ({company.reviewsCount})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.sector}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopCompanies;
