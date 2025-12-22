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