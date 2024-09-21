import { FORBIDDEN } from "../core/utils/constant";
import apiClient from "./axiosConfig";

//Fetch the image contents
export const fetchDataPage = async (pageNum) => {
  try {
    return await apiClient.get(`/data/page${pageNum}.json`);
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error(FORBIDDEN);
      return { forbidden: true };
    } else {
      console.error("API Errors: ", error);
      throw error;
    }
  }
};
