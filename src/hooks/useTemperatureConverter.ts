import { useState } from "react";
import type { TemperatureUnit } from "@/lib/types";
import { toCelsius, fromCelsius } from "@/lib/utils";

export default function useTemperatureConverter() {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<TemperatureUnit>("Celsius");
  const [to, setTo] = useState<TemperatureUnit>("Fahrenheit");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convert = () => {
    const celsius = toCelsius(value, from);
    const converted = fromCelsius(celsius, to);

    if (to === "Kelvin" && converted < 0) {
      setError("Temperature below absolute zero!");
      setResult(1);
      return;
    }

    setResult(Number(converted.toFixed(2)));
    setError(null);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
    setError(null);
  };

  return {
    value,
    setValue,
    from,
    setFrom,
    to,
    setTo,
    result,
    error,
    convert,
    swap
  };
}