import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function withBasePath(path: string) {
  const basePath = getBasePath();
  // Remove any leading slashes from the path
  const cleanPath = path.replace(/^\/+/, '');
  // Combine basePath with cleanPath, ensuring no double slashes
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
