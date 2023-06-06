import React, { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, TextField, Typography, Button } from '@mui/material';
import './PaymentModePage.css';

const PaymentModePage = () => {
  const [paymentMode, setPaymentMode] = useState('');
  const [feesAmount, setFeesAmount] = useState('');

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handlePayClick = () => {
    // Logic to handle payment
    console.log('Payment initiated');
  };

  return (
    <div className="payment-mode-container">
      <div className="payment-options">
        <Typography variant="h6" gutterBottom>
          Select Payment Mode:
        </Typography>

        <RadioGroup name="paymentMode" value={paymentMode} onChange={handlePaymentModeChange}>
          <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
          <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
          <FormControlLabel value="wallets" control={<Radio />} label="Wallets" />
          <FormControlLabel value="upi" control={<Radio />} label="UPI" />
        </RadioGroup>
      </div>

      <div className="payment-details">
        <TextField
          label="Fees Amount"
          value={feesAmount}
          onChange={(e) => setFeesAmount(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />

        <Button variant="contained" color="primary" onClick={handlePayClick}>
          Pay
        </Button>
      </div>
    </div>
  );
};

export default PaymentModePage;
