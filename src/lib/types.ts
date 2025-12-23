export type Unit = {
  label: string;
  value: string;
};

export const lengthUnits: Unit[] = [
  { label: "Millimeter", value: "mm" },
  { label: "Centimeter", value: "cm" },
  { label: "Meter", value: "m" },
  { label: "Kilometer", value: "km" },
  { label: "Inch", value: "in" },
  { label: "Foot", value: "ft" },
  { label: "Yard", value: "yd" },
  { label: "Mile", value: "mi" }
];

export const areaUnits: Unit[] = [
  { label: "Square millimeter", value: "mm2" },
  { label: "Square centimeter", value: "cm2" },
  { label: "Square meter", value: "m2" },
  { label: "Square kilometer", value: "km2" },
  { label: "Hectare", value: "ha" },
  { label: "Square inch", value: "in2" },
  { label: "Square foot", value: "ft2" },
  { label: "Square yard", value: "yd2" },
  { label: "Acre", value: "ac" }
];