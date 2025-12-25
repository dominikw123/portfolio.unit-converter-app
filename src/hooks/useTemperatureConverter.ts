import { useState } from "react";
import type { TemperatureUnit } from "@/lib/types";

export default function useTemperatureConverter() {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<TemperatureUnit>("Celsius");
  const [to, setTo] = useState<TemperatureUnit>("Fahrenheit");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const celsius = toCelsius(value, from);
    const converted = fromCelsius(celsius, to);

    if (to === "Kelvin" && converted < 0) {
      setResult(null);
      return;
    }

    setResult(Number(converted.toFixed(2)));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return {
    value,
    setValue,
    from,
    setFrom,
    to,
    setTo,
    result,
    convert,
    swap
  };
}

function toCelsius(value: number, from: TemperatureUnit): number {
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

function fromCelsius(value: number, to: TemperatureUnit): number {
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