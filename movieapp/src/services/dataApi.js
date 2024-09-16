import apiClient from "./axiosConfig";

export const fetchDataPage = async (pageNum) => {
  try {
    return await apiClient.get(`/data/page${pageNum}.json`);
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("Access Forbidden");
      return { forbidden: true };
    } else {
      console.error("API Errors: ", error);
      throw error;
    }
  }
};
