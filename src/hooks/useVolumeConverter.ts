import useLinearConverter from "@/hooks/useLinearConverter";
import { type Unit } from "@/lib/types";

export const volumeFactors: Record<Unit["value"], number> = {
  ml: 0.001,
  l: 1,
  m3: 1000,
  tsp: 0.00492892,
  tbsp: 0.0147868,
  cup: 0.24,
  pt: 0.473176,
  qt: 0.946353,
  gal: 3.78541
} as const;

export default function useVolumeConverter() {
  return useLinearConverter<Unit["value"]>(volumeFactors, { defaultFrom: "ml", defaultTo: "l" });
}