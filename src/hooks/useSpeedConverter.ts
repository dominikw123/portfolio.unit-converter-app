import useLinearConverter from "@/hooks/useLinearConverter";
import { type Unit } from "@/lib/types";

const speedFactors: Record<Unit["value"], number> = {
  ms: 1,
  kmh: 0.277778,
  mph: 0.44704,
  fps: 0.3048,
  kt: 0.514444
} as const;

export default function useSpeedConverter() {
  return useLinearConverter<Unit["value"]>(speedFactors, { defaultFrom: "ms", defaultTo: "kmh" });
}