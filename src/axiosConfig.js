import axios from "axios";

const instance = axios.create({
  baseURL: "https://movie-backend-1-3le3.onrender.com",
});

// Attach token
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default instance;
