import axios from "axios";

const API_URL = "https://localhost:7031/api/items";

export const fetchItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchItemById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addItem = async (item) => {
  await axios.post(API_URL, item);
};

export const updateItem = async (item) => {
  await axios.put(`${API_URL}/${item.id}`, item);
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
