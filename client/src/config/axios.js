import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

// 토큰 만료시 로그아웃
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.response && err.response.data === "jwt expired") {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
