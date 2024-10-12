import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `${token ? `Bearer ${token}` : ""}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Jika respons berhasil, kembalikan respons
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Jika status respons adalah 401 (Unauthorized)
      clearCookiesAndLocalStorage();
    }
    return Promise.reject(error);
  }
);

function clearCookiesAndLocalStorage() {
  // Hapus semua cookie
  document.cookie.split(";").forEach((cookie) => {
    document.cookie = cookie
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });

  // Hapus localStorage
  localStorage.clear();

  // Redirect ke halaman login atau lakukan tindakan lain
  window.location.href = "/"; // Ganti dengan URL halaman login Anda
}

export default axiosInstance;
