import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateMobile } from '../utils/validator.js';
import '../styles/login-register.css';
import bg from '../assets/bglogin.png';
import googleIcon from '../icons/google-icon.png'
import gmailIcon from '../icons/gmail-icon.png'

export default function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  const isFormValid = validateMobile(mobile);

  const handleMobileChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    setMobile(onlyNumbers.slice(0, 10));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Login with mobile:', mobile);
      // Add your login logic here
      navigate('/');
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-overlay" />

      <div className="login-card">
        <h2>Login or Create Account</h2>
        <p>Enter your mobile number to get started</p>

        <div className="phone-input">
          <span>🇮🇳</span>
          <span>+91</span>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={handleMobileChange}
            maxLength={10}
            autoComplete="tel"
          />
        </div>

        <button 
          className={`login-btn ${isFormValid ? 'active' : 'inactive'}`}
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          CONTINUE
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-wrapper">
          <button className="social-btn">
            <img src={googleIcon} alt="Google" />
            <span>Sign up with Google</span>
          </button>
          <button className="social-btn">
            <img src={gmailIcon} alt="Email" />
            <span>Sign up with Email</span>
          </button>
        </div>

        <div className="referral" onClick={() => navigate('/register')}>
          NEW USER? CREATE ACCOUNT
        </div>
      </div>
    </div>
  );
}