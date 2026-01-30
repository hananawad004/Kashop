
// import { useAuthStore } from '../store/authStore';
// const axiosAuthInstance = axios.create({
//   baseURL: 'https://knowledgeshop.runasp.net/api',
// });

// axiosAuthInstance.interceptors.request.use((config) => {
//   const { token } = useAuthStore.getState();
//   config.headers["Accept-Language"] = "en";
//   config.headers["Authorization"] = `Bearer ${token}`
//   return config;
// })

// export default axiosAuthInstance;import axios from 'axios'
// import { useAuthStore } from '../store/authStore';

// const axiosAuthInstance = axios.create({
//   baseURL: 'https://knowledgeshop.runasp.net/api',
// });

// axiosAuthInstance.interceptors.request.use((config) => {
//   const { token } = useAuthStore.getState(); // 
//   config.headers["Accept-Language"] = "en";
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosAuthInstance;
import axios from "axios";
import { useAuthStore } from "../store/authStore";

const axiosAuthInstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
  withCredentials: true,
});

const axiosRefreshInstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
  withCredentials: true,
});


axiosAuthInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();

    config.headers["Accept-Language"] = "en";

    if (token && !config._isRefresh) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



axiosAuthInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest._isRefresh
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axiosRefreshInstance.post(
          "/auth/Account/RefreshToken",
          null,
          { _isRefresh: true }
        );

        const newAccessToken = refreshResponse.data.accessToken;

        useAuthStore.getState().setToken(newAccessToken);

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return axiosAuthInstance(originalRequest);
      } catch (err) {
        useAuthStore.getState().logout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosAuthInstance;
