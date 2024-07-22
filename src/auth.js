const baseUrl = "http://localhost:3001";

export const registerUser = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Registration failed:", errorData.message);
      throw new Error(errorData.message || "Failed to register");
    }
    const data = await response.json();
    console.log("User registered successfully:", data);
    return data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login failed:", errorData.message);
      throw new Error(errorData.message || "Failed to login");
    }
    const data = await response.json();
    localStorage.setItem("jwt", data.token);
    console.log("User logged in successfully:", data);
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Fetching user data failed:", errorData.message);
      throw new Error(errorData.message || "Failed to get user");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const updateUser = async (token, { name, avatar }) => {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Updating user data failed:", errorData.message);
      throw new Error(errorData.message || "Failed to update user");
    }
    const data = await response.json();
    console.log("User data updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
