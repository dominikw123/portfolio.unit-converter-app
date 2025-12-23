import useLinearConverter from "@/hooks/useLinearConverter";
import { type Unit } from "@/lib/types";

const lengthFactors: Record<Unit["value"], number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34
} as const;

export default function useLengthConverter() {
  return useLinearConverter<Unit["value"]>(lengthFactors, { defaultFrom: "mm", defaultTo: "mm" });
}