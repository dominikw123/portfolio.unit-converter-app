import useLinearConverter from "@/hooks/useLinearConverter";
import { type Unit } from "@/lib/types";

const areaFactors: Record<Unit["value"], number> = {
  mm2: 0.000001,
  cm2: 0.0001,
  m2: 1,
  km2: 1_000_000,
  ha: 10_000,
  in2: 0.00064516,
  ft2: 0.092903,
  yd2: 0.836127,
  ac: 4046.86
} as const;

export default function useAreaConverter() {
  return useLinearConverter<Unit["value"]>(areaFactors, { defaultFrom: "mm2", defaultTo: "cm2" });
}