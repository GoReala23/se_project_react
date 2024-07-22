const baseUrl = "http://localhost:3001";

const checkResponse = (response) => {
  if (!response.ok) {
    return response.json().then((error) => {
      throw new Error(error.message);
    });
  }
  return response.json();
};

export const fetchItems = async () => {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(response);
};

export const addItem = async (item) => {
  const token = localStorage.getItem("jwt");
  try {
    const response = await fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });

    return checkResponse(response);
  } catch (error) {
    console.error("Error in addItem fetch:", error);
    throw error;
  }
};

export const deleteItem = async (_id) => {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(response);
};

export const addCardLike = async (id, token) => {
  const response = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(response);
};

export const removeCardLike = async (id, token) => {
  const response = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(response);
};
