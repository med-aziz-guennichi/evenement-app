import axios from "axios";

const PROXY_URL = "http://localhost:5000/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const userInfo = user && JSON.parse(user).userInfo;

const TOKEN = userInfo?.token;

export const publicRequest = axios.create({
  baseURL: PROXY_URL,
});

export const userRequest = axios.create({
  baseURL: PROXY_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
