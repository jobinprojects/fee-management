import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CollegeDetails from './CollegeDetails';
import FeesTypePage from './FeesTypePage';
import PaymentModePage from './PaymentModePage';
import './SignUpForm.css';

const SignUpForm = () => {
  const [showStudentInfo, setShowStudentInfo] = useState(true);
  const [showSelectCollegeDetails, setShowSelectCollegeDetails] = useState(false);
  const [showFeesTypePage, setShowFeesTypePage] = useState(false);
  const [showPaymentModePage, setShowPaymentModePage] = useState(false);
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');

  const validateEnrollmentNo = () => /^[0-9]+$/.test(enrollmentNo);
  const validateFullName = () => /^[A-Za-z\s]+$/.test(fullName);
  const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = () => /^\d{10}$/.test(mobile);
  const validatePostalCode = () => /^\d{6}$/.test(postalCode);

  const handleStudentInfo = () => {
    if (enrollmentNo && fullName && email && mobile && address && postalCode && state) {
      setShowStudentInfo(true);
      setShowSelectCollegeDetails(false);
      setShowFeesTypePage(false);
      setShowPaymentModePage(false);
    }
  };

  const handleSelectCollegeDetails = () => {
    if (enrollmentNo && fullName && email && mobile && address && postalCode && state) {
      setShowStudentInfo(false);
      setShowSelectCollegeDetails(true);
      setShowFeesTypePage(false);
      setShowPaymentModePage(false);
    }
  };

  const handleFeesTypePage = () => {
    if (enrollmentNo && fullName && email && mobile && address && postalCode && state) {
      setShowStudentInfo(false);
      setShowSelectCollegeDetails(false);
      setShowFeesTypePage(true);
      setShowPaymentModePage(false);
    }
  };

  const handlePaymentModePage = () => {
    if (enrollmentNo && fullName && email && mobile && address && postalCode && state) {
      setShowStudentInfo(false);
      setShowSelectCollegeDetails(false);
      setShowFeesTypePage(false);
      setShowPaymentModePage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enrollmentNo && fullName && email && mobile && address && postalCode && state) {
      setShowStudentInfo(false);
      setShowSelectCollegeDetails(true);
      setShowFeesTypePage(false);
      setShowPaymentModePage(false);
    }
  };

  return (
    <div className="container">
      <div className="top-container">
        <div className="logo-container">
          <img src="https://bharatividyapeethfees.com/college/sitedata/images/pay_left.png" alt="Logo 1" className="logo" />
        </div>
        <div className="text-container">
          <h1 className="portal-title">Fee Management Portal</h1>
        </div>
        <div className="logo-container">
          <img src="https://bharatividyapeethfees.com/college/sitedata/images/pay_right.png" alt="Logo 2" className="logo" />
        </div>
      </div>

      <div className="form-container">
        <div className="custom-nav-container">
          <nav className="custom-navbar">
            <ul className="custom-nav-links">
              <li className={showStudentInfo ? 'active' : ''}>
                <a href="#" onClick={handleStudentInfo}>Student Info</a>
              </li>
              <li className={showSelectCollegeDetails ? 'active' : ''}>
                <a href="#" onClick={handleSelectCollegeDetails}>Select College</a>
              </li>
              <li className={showFeesTypePage ? 'active' : ''}>
                <a href="#" onClick={handleFeesTypePage}>Fees Type</a>
              </li>
              <li className={showPaymentModePage ? 'active' : ''}>
                <a href="#" onClick={handlePaymentModePage}>Payment Mode</a>
              </li>
            </ul>
          </nav>
        </div>

        {showStudentInfo && !showSelectCollegeDetails && !showFeesTypePage && !showPaymentModePage && (
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                label="Enrollment No"
                value={enrollmentNo}
                onChange={(e) => setEnrollmentNo(e.target.value)}
                error={!validateEnrollmentNo() && enrollmentNo !== ''}
                helperText={!validateEnrollmentNo() && 'Please enter a valid enrollment number'}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                required
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={!validateFullName() && fullName !== ''}
                helperText={!validateFullName() && 'Please enter a valid full name'}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                required
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!validateEmail() && email !== ''} 
                helperText={!validateEmail() && 'Please enter a valid email address'}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                required
                label="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                error={!validateMobile() && mobile !== ''}
                helperText={!validateMobile() && 'Please enter a valid mobile number'}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                required
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                required
                label="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                error={!validatePostalCode() && postalCode !== ''}
                helperText={!validatePostalCode() && 'Please enter a valid postal code'}
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                select
                required
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                fullWidth
                style={{ marginBottom: '20px' }}
              >
                <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                <MenuItem value="Assam">Assam</MenuItem>
                <MenuItem value="Bihar">Bihar</MenuItem>
                <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                <MenuItem value="Goa">Goa</MenuItem>
                <MenuItem value="Gujarat">Gujarat</MenuItem>
                <MenuItem value="Haryana">Haryana</MenuItem>
                <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Kerala">Kerala</MenuItem>
                <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                <MenuItem value="Manipur">Manipur</MenuItem>
                <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                <MenuItem value="Mizoram">Mizoram</MenuItem>
                <MenuItem value="Nagaland">Nagaland</MenuItem>
                <MenuItem value="Odisha">Odisha</MenuItem>
                <MenuItem value="Punjab">Punjab</MenuItem>
                <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                <MenuItem value="Sikkim">Sikkim</MenuItem>
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Telangana">Telangana</MenuItem>
                <MenuItem value="Tripura">Tripura</MenuItem>
                <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                <MenuItem value="West Bengal">West Bengal</MenuItem>
              </TextField>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Next
              </Button>
            </form>
          </div>
        )}

        {showSelectCollegeDetails && !showFeesTypePage && !showPaymentModePage && (
          <CollegeDetails
            enrollmentNo={enrollmentNo}
            fullName={fullName}
            email={email}
            mobile={mobile}
            address={address}
            postalCode={postalCode}
            state={state}
          />
        )}

        {showFeesTypePage && !showPaymentModePage && (
          <FeesTypePage
            enrollmentNo={enrollmentNo}
            fullName={fullName}
            email={email}
            mobile={mobile}
            address={address}
            postalCode={postalCode}
            state={state}
          />
        )}

        {showPaymentModePage && (
          <PaymentModePage
            enrollmentNo={enrollmentNo}
            fullName={fullName}
            email={email}
            mobile={mobile}
            address={address}
            postalCode={postalCode}
            state={state}
          />
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
