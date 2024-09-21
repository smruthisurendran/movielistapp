import { CONTENT_TYPE } from "../core/utils/constant";
import axios from "axios";

const apiClient = axios.create({
  baseURL: window.appSettings.BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE,
  },
});

export default apiClient;
