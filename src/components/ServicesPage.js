import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './ServicesPage.css';

const PaymentHistory = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    // You can access the form values using the state variables
    console.log('Enrollment No:', enrollmentNo);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    // Add further processing or API calls here
  };

  return (
    <div className="payment-history-container">
      <h2>Payment History</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enrollment No"
          value={enrollmentNo}
          onChange={(e) => setEnrollmentNo(e.target.value)}
          fullWidth
          required
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          required
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          style={{ marginBottom: '20px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PaymentHistory;
