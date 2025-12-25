import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { TemperatureUnit } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toCelsius(value: number, from: TemperatureUnit): number {
  switch (from) {
    case "C":
      return value;
    case "F":
      return (value - 32) * 5 / 9;
    case "K":
      return value - 273.15;
    default:
      return value;
  }
}

export function fromCelsius(value: number, to: TemperatureUnit): number {
  switch (to) {
    case "C":
      return value;
    case "F":
      return value * 9 / 5 + 32;
    case "K":
      return value + 273.15;
    default:
      return value;
  }
}