import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `${token ? token : ""}`;
  }
  return config;
});

export default axiosInstance;
