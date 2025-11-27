import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const register = (data) =>
  axios.post(`${API_BASE_URL}/api/auth/register`, data);
export const login = (data) =>
  axios.post(`${API_BASE_URL}/api/auth/login`, data);
export const userLogin = (data) =>
  axios.post(`${API_BASE_URL}/api/auth/userLogin`, data);
export const createBooking = (data, token) =>
  axios.post(`${API_BASE_URL}/api/bookings`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const getMyBookings = (token) =>
  axios.get(`${API_BASE_URL}/api/bookings/my-bookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
// ...add more API functions as needed
