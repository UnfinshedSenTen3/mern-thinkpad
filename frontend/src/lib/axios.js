import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// had to change this to deploy using netlify properly
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5001/api" : null);

if (!BASE_URL) {
  throw new Error("VITE_API_URL must be set for production builds");
}

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
