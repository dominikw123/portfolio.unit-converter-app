import { useState } from "react";
import { type CurrencyCode } from "@/lib/types";

type CurrencyResponse = {
  amount: number;
  base: CurrencyCode;
  date: string;
  rates: Record<CurrencyCode, number>;
};

export default function useCurrencyConverter() {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<CurrencyCode>("EUR");
  const [to, setTo] = useState<CurrencyCode>("USD");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const convert = async () => {
    if (value < 0) {
      setError("Value cannot be negative!");
      setResult(null);
      return;
    }

    if (from === to) {
      setResult(value);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?base=${from}&symbols=${to}`
      );

      if (!response.ok) throw new Error("Failed to fetch currency rates!");

      const data: CurrencyResponse = await response.json();
      const rate = data.rates[to];

      if (!rate) throw new Error("Currency not supported!");

      setResult(value * rate);
    } catch (error) {
      setError((error as Error).message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return {
    value,
    setValue,
    from,
    setFrom,
    to,
    setTo,
    setResult,
    result,
    loading,
    error,
    convert,
    swap
  };
}