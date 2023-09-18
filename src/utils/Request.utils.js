import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.26.152.246:8001",
});
