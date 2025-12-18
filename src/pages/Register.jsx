import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validateMobile, validateName } from '../utils/validator.js';
import '../styles/login-register.css';
import bg from '../assets/bglogin.png';
import googleIcon from '../icons/google-icon.png'
import gmailIcon from '../icons/gmail-icon.png'

export default function Register() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const isFormValid =
        validateName(fullName) &&
        validateMobile(mobile) &&
        validateEmail(email);

    const handleNameChange = (e) => {
        const value = e.target.value;
        // Allow only letters and spaces
        const onlyLettersAndSpaces = value.replace(/[^a-zA-Z ]/g, '');
        setFullName(onlyLettersAndSpaces.slice(0, 50));
    };

    const handleMobileChange = (e) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');
        setMobile(onlyNumbers.slice(0, 10));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (isFormValid) {
            console.log('Register:', { fullName, mobile, email });
            // Add your registration logic here
            navigate('/');
        }
    };

    return (
        <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="login-overlay" />

            <div className="login-card">
                <h2>Create Account</h2>
                <p>Enter your details to get started</p>

                <div className="phone-input">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={handleNameChange}
                        autoComplete="name"
                    />
                </div>

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

                <div className="phone-input">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete="email"
                    />
                </div>

                <button
                    className={`login-btn ${isFormValid ? 'active' : 'inactive'}`}
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                >
                    REGISTER
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

                <div className="referral" onClick={() => navigate('/login')}>
                    ALREADY HAVE AN ACCOUNT? LOGIN
                </div>
            </div>
        </div>
    );
}