import axios from "axios";

const apiClient = axios.create({
  baseURL: window.appSettings.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
