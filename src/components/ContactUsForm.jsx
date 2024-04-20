import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, styled } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

const Form = styled('form')({
  width: '100%',
  maxWidth: 600,
  marginTop: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FieldWrapper = styled(Box)({
  marginBottom: 16,
  width: '100%',
});

const ConfirmationMessage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 16,
  color: '#4caf50',
});

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    let timer;
    if (showConfirmation) {
      timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showConfirmation]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form data
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowConfirmation(true);
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Contact Us {import.meta.env.VITE_APP_NAME}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        123 Main Street, Bangalore, India 560001
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        Please submit this form to contact us, or you can chat with us from 9:00 AM to 6:00 PM IST (Monday to Friday)
      </Typography>

      {showConfirmation && (
        <ConfirmationMessage>
          <CheckIcon sx={{ marginRight: 1 }} />
          <Typography variant="body1">Thanks for contacting us. We will reach you shortly, genuinely!</Typography>
        </ConfirmationMessage>
      )}

      <Form onSubmit={handleSubmit}>
        <FieldWrapper>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            name="subject"
            label="Subject"
            value={formData.subject}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
          />
        </FieldWrapper>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUsForm;