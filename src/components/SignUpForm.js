import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    // You can access the form values using the state variables
  };

  return (
    <div className="container">
      <div class="top-container">
  <div class="logo-container">
    <img src="https://bharatividyapeethfees.com/college/sitedata/images/pay_left.png" alt="Logo 1" class="logo" />
  </div>
  <div class="text-container">
    <h1 class="portal-title">Fee Management Portal</h1>
  </div>
  <div class="logo-container">
    <img src="https://bharatividyapeethfees.com/college/sitedata/images/pay_right.png" alt="Logo 2" class="logo" />
  </div>
</div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enrollment Number</label>
          <input
            type="text"
            className="form-control"
            value={enrollmentNo}
            onChange={(e) => setEnrollmentNo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            className="form-control"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <select
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            {/* Add the remaining options */}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
</div>    
  );
};

export default SignUpForm;
