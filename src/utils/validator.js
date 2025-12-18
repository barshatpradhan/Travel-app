// src/utils/validator.js

// Validate exactly 10 digits
export function validateMobile(mobile) {
  return /^\d{10}$/.test(mobile.trim());
}

// Validate full name (only letters and spaces, 2-50 chars)
export function validateName(name) {
  return /^[a-zA-Z ]{2,50}$/.test(name.trim());
}

// Validate email
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
