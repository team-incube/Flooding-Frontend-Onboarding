import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001",
  timeout: 10000,
  headers: {
    Content_Type: "application/json",
  },
});

export default axios;
