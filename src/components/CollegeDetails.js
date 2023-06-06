import React from 'react';
import { TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const CollegeDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
  };

  return (
    <div className="container">
      <div className="form-container">
        <div style={{ marginBottom: '20px' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Select Campus"
              select
              fullWidth
              required
              style={{ marginBottom: '20px' }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="campus1">New Delhi</MenuItem>
            </TextField>

            <TextField
              label="Select College"
              select
              fullWidth
              required
              style={{ marginBottom: '20px' }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="college1">BVICAM</MenuItem>
            </TextField>

            <TextField
              label="Select Course"
              select
              fullWidth
              required
              style={{ marginBottom: '20px' }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="course1">MCA</MenuItem>
              <MenuItem value="course2">BJMC</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
