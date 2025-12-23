import useLinearConverter from "@/hooks/useLinearConverter";
import { type Unit } from "@/lib/types";

const weightFactors: Record<Unit["value"], number> = {
  mg: 0.000001,
  g: 0.001,
  kg: 1,
  t: 1000,
  oz: 0.0283495,
  lb: 0.453592
} as const;

export default function useWeightConverter() {
  return useLinearConverter<Unit["value"]>(weightFactors, { defaultFrom: "mg", defaultTo: "g" });
}