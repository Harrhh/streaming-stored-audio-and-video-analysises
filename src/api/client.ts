import axios from "axios";

function defaultApiUrl() {
  if (typeof window !== "undefined" && window.location.hostname) {
    return `${window.location.protocol}//${window.location.hostname}:8000`;
  }
  return "http://localhost:8000";
}

export const API_URL = import.meta.env.VITE_API_URL || defaultApiUrl();

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 30_000,
});

export function errorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const detail = error.response?.data?.detail;
    return typeof detail === "string"
      ? detail
      : "Không thể thực hiện yêu cầu. Vui lòng thử lại.";
  }
  return error instanceof Error ? error.message : "Đã có lỗi xảy ra.";
}
