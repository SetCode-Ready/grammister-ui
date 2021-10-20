import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const token = JSON.parse(String(window.localStorage.getItem("token")));

api.interceptors.request.use(async (config) => {
  try {

    if (token) {
      config.headers!.Authorization = `${token}`;
    }

    return config;
  } catch (error) {
    console.log(error)
  }
});

axios.defaults.headers.common['Authorization'] = token;

export default api;
