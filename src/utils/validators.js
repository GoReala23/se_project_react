import validator from 'validator';

// Utility function to validate URLs
export const validateUrl = (url) => {
  const isValid = validator.isURL(url);
  console.log(`Validating URL "${url}": ${isValid}`);
  return validator.isURL(url);
};

// Utility function to validate emails
export const validateEmail = (email) => {
  return validator.isEmail(email);
};

// Utility function to check if a field is empty
export const isEmpty = (value) => {
  return value == null || validator.isEmpty(value);
};
