import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const FeesTypePage = () => {
  const [year, setYear] = useState('');
  const [feesType, setFeesType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    // You can access the form values using the state variables
  };

  return (
    <div className="fees-type-container">
      <h2>Select Fees Type</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          select
          fullWidth
          required
          style={{ marginBottom: '20px' }}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="1st Year">1st Year</MenuItem>
          <MenuItem value="2nd Year">2nd Year</MenuItem>
          {/* Add more options as needed */}
        </TextField>

        <TextField
          label="Type of Fees"
          value={feesType}
          onChange={(e) => setFeesType(e.target.value)}
          select
          fullWidth
          required
          style={{ marginBottom: '20px' }}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Tuition Fees">Tuition/Term/Total Fee</MenuItem>
          <MenuItem value="Library Fees">Library Fees</MenuItem>
          <MenuItem value="Development Fee">Development Fees</MenuItem>
          <MenuItem value="Exam Fees">Exam Fees</MenuItem>
          <MenuItem value="Other Fees">Others Fee</MenuItem>
          {/* Add more options as needed */}
        </TextField>

        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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

export default FeesTypePage;
