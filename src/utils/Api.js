const baseUrl = "http://localhost:3000";

export const fetchItems = async () => {
  try {
    const response = await fetch(`${baseUrl}/items`);
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    const data = await response.json();
    console.log("Fetched items:", data);
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
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
    return await response.json();
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
