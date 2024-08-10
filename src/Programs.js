import React, { useState } from 'react';
import Navbar from './navbar';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box, TextField, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone'; // Importing the Phone icon
import Footer from './footer';

function Programs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/path/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({ name: '', email: '', mobile: '', query: '' }); // Reset the form
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
  };

  const cards = [
    {
      title: 'Resume Display',
      content: 'Increase your Profile Visibility to recruiters up to 3 times. Get a Featured Profile, Stand out and get noticed in recruiter eyes.',
      price: '₹ 890 for 1 Month',
      img: 'resumedis.jpeg', // replace with appropriate image
      label: 'MOST POPULAR',
      link: '/resumedis' // replace with appropriate link
    },
    {
      title: 'AI Mock Interview',
      content: 'Personalized AI driven mock interviews for your profile. Designed to streamline your interview preparation effortlessly.',
      price: '₹ 296 for 3 Months',
      img: 'mock.avif', // replace with appropriate image
      label: 'FREE TRIAL',
      link: '/ai-mock-interview' // replace with appropriate link
    },
    {
      title: 'Monthly Job Search Plan',
      content: 'Rank higher in Recruiter Searches. Priority Access to Jobs. Send message to Recruiter anytime.',
      price: '₹ 890 Per month',
      img: 'search.jpg', // replace with appropriate image
      label: 'NEW',
      link: '/monthly-job-search' // replace with appropriate link
    },
    {
      title: 'Resume Writing',
      content: 'Standout from the crowd with our professionally written Resume by expert. Resume that highlights your strengths and showcase your experience.',
      price: '₹ 1653 Only',
      img: 'reswrit.jpg', // replace with appropriate image
      label: '',
      link: '/resume-writing' // replace with appropriate link
    },
    {
      title: 'Priority Applicant',
      content: 'Be a Priority Applicant & increase your chance of getting a call. Be the first one to apply and catch recruiter attention.',
      price: '₹ 971 for 3 Months',
      img: 'priority.jpeg', // replace with appropriate image
      label: 'RECOMMENDED',
      link: '/priority-applicant' // replace with appropriate link
    },
    {
      title: 'Online Resume Maker',
      content: 'Create a job-winning resume with our simple resume maker. Use our templates to create a professional resume quickly and easily. Tailor your resume to the job you’re applying for and make a great first impression on recruiters.',
      price: '₹ 500 Per month',
      img: 'onlineres.avif', // replace with appropriate image
      label: '',
      link: '/online-resume-maker' // replace with appropriate link
    },
    {
      title: 'Jobs For You',
      content: 'Stand out as an Early Applicant with instant access to jobs. Our experts will understand your job preference & set alerts. Instant job on SMS.',
      price: '₹ 1566 for 3 Months',
      img: 'jobsforu.jpg', // replace with appropriate image
      label: '',
      link: '/jobs-for-you' // replace with appropriate link
    },
    {
      title: 'Recruiter Connection',
      content: 'Send personalized message to recruiters. Search from a database of 1.6 Lakh recruiters and share your Naukri profile.',
      price: '₹ 839 for 5 Credits',
      img: 'rcon.jpg', // replace with appropriate image
      label: '', 
      link: '/recruiter-connection' // replace with appropriate link
    },
    {
      title: 'Resume Critique',
      content: 'Get your resume reviewed and improve your job application. Our experts will analyze your resume and send a detailed report.',
      price: '₹ 1017 Only',
      img: 'rescri.avif', // replace with appropriate image
      label: '',
      link: '/resume-critique' // replace with appropriate link
    }
  ];

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to HireHorizon Services</h1>
        <h3>Move ahead in career, faster</h3>
      </div>
      <Grid container spacing={3} sx={{ padding: 8, paddingLeft: 15 }}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '90%', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)" }}>
              <div>
                <CardMedia
                  component="img"
                  height="220" // Increase the image height
                  image={card.img}
                  alt={card.title}
                />
                <CardContent>
                  {card.label && (
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {card.label}
                    </Typography>
                  )}
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                  {card.price && (
                    <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                      {card.price}
                    </Typography>
                  )}
                </CardContent>
              </div>
              <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href={card.link}
                >
                  Know More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                backgroundColor: '#1976d2', // matching the blue color from the image
                color: 'white', 
                p: 3, 
                borderRadius: 0, 
                height: '90%', // Adjust height
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                paddingLeft:10
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Talk to Us</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 5 }}>Call us Toll Free: 1800-102-5557</Typography>
              <Typography variant="body1" sx={{ mb: 5 }}>(9.00 AM to 9.00 PM IST)</Typography>
              <Typography variant="body1" sx={{ mb: 5 }}>International Customer Call: +91-120-4021100</Typography>
              <Typography variant="body1">For bulk queries call: 18001034477</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                p: 3, 
                border: '1px solid grey', 
                borderRadius: 0, 
                height: '90%', // Adjust height
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}
            >
              <Typography variant="h6">Contact Us</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email ID"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Mobile"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <TextField
                  label="Write your query here"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                />
                <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Programs;
