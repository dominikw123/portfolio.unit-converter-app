import { useState } from "react";

export default function useLinearConverter<T extends string>(
  factors: Record<T, number>,
  options?: {
    defaultFrom?: T;
    defaultTo?: T;
    initialValue?: number;
  }
) {
  const units = Object.keys(factors) as T[];

  const [value, setValue] = useState(options?.initialValue ?? 0);
  const [from, setFrom] = useState<T>(options?.defaultFrom ?? units[0]);
  const [to, setTo] = useState<T>(options?.defaultTo ?? units[1] ?? units[0]);
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    if (from === to) setResult(Number(value.toFixed(10)));
    else setResult(Number((value * (factors[from] / factors[to])).toFixed(10)));
  };

  const swap = () => {
    const oldFrom = from;
    setFrom(to);
    setTo(oldFrom);
    setResult(null);
  };

  return { value, setValue, from, setFrom, to, setTo, result, convert, swap };
}