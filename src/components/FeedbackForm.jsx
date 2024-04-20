import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, styled } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

const Form = styled('form')({
  width: '100%',
  maxWidth: 600,
  marginTop: 16,
});

const FieldWrapper = styled(Box)({
  marginBottom: 16,
});

const ConfirmationMessage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: 16,
  color: '#4caf50',
});

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
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
    setFormData({ name: '', email: '', rating: '', feedback: '' });
    setShowConfirmation(true);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Your Feedback Matters!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We value your opinion and strive to make our app the best it can be. Your feedback helps us improve and shape a better experience for you and all our users. Take a moment to share your thoughts with us!
      </Typography>
      {showConfirmation && (
        <ConfirmationMessage>
          <CheckIcon sx={{ marginRight: 1 }} />
          <Typography variant="body1">We have received your feedback and we welcome your opinion!</Typography>
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
            name="rating"
            label="Rating (1-5)"
            value={formData.rating}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            name="feedback"
            label="Feedback"
            value={formData.feedback}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
          />
        </FieldWrapper>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit Feedback
        </Button>
      </Form>
    </Container>
  );
};

export default FeedbackForm;