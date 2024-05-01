import { processServerResponse } from "./ApiWeather";

const baseUrl = "http://localhost:3001";

export const fetchItems = async () => {
  if (!baseUrl) {
    return [];
  }
  const response = await fetch(`${baseUrl}/items`);

  const data = processServerResponse(response);

  return data;
};

export const addItem = async (item) => {
  try {
    const response = await fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error("Failed to add item");
    }
    const addedItem = await response.json();
    console.log("Added item:", addedItem);
    return addedItem;
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

export const deleteItem = async (_id) => {
  try {
    const response = await fetch(`${baseUrl}/items/${_id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete item");
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
