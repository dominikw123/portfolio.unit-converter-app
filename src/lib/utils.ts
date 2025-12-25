import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { TemperatureUnit } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function toCelsius(value: number, from: TemperatureUnit): number {
  switch (from) {
    case "Celsius":
      return value;
    case "Fahrenheit":
      return (value - 32) * 5 / 9;
    case "Kelvin":
      return value - 273.15;
    default:
      return value;
  }
}

export function fromCelsius(value: number, to: TemperatureUnit): number {
  switch (to) {
    case "Celsius":
      return value;
    case "Fahrenheit":
      return value * 9 / 5 + 32;
    case "Kelvin":
      return value + 273.15;
    default:
      return value;
  }
}