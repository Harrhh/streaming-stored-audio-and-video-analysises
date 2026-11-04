import { API_URL } from "./client";

export interface VideoInfo {
  id: string;
  title: string;
  description: string;
  username: string;
  duration: number;
  progress: number;
  thumbnail_url: string | null;
  created_at: string;
  status: string;
  error: string | null;
}
export function mediaUrl(path: string) {
  return `${API_URL}${path}`;
}
export function formatTime(seconds: number) {
  const whole = Math.floor(seconds || 0);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}
