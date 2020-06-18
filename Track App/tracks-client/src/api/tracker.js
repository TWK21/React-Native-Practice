import axios from "axios";
//npm install axios

//npm install -g ngrok
//to allow your phone emulator to access API on the laptop that might be on different network
//free version requires refresh every 8hrs
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://356780a2.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
