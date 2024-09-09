import { checkResponse } from '../utils/Api';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.what2wear.strangled.net'
    : 'http://localhost:3001';

// export const registerUser = async ({ name, email, password, avatar }) => {
//   try {
//     const response = await fetch(`${baseUrl}/signup`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password, avatar }),
//     });
//     return checkResponse(response);
//   } catch (error) {
//     console.error('Error during registration:', error);
//     throw error;
//   }
// };

// auth.js (Frontend)
export const registerUser = async ({ name, email, password, avatar }) => {
  try {
    console.log('Sending registration request with data:', {
      name,
      email,
      password,
      avatar,
    }); // Log before request

    const response = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, avatar }),
    });

    const data = await checkResponse(response); // Handle response
    console.log('Registration response received:', data); // Log response data
    return data;
  } catch (error) {
    console.error(`Error during registration: ${error.message}`); // Proper string interpolation for error message
    throw error; // Re-throw error to handle it where this function is called
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await checkResponse(response);
    localStorage.setItem('jwt', data.token);
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return checkResponse(response);
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const updateUser = async (token, { name, avatar }) => {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    });
    const data = await checkResponse(response);
    console.log('User data updated successfully:', data);
    return data;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};
