// lib/utils/cn.ts (or utils/cn.ts)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}
