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

export const weightUnits: Unit[] = [
  { label: "Milligram", value: "mg" },
  { label: "Gram", value: "g" },
  { label: "Kilogram", value: "kg" },
  { label: "Tonne", value: "t" },
  { label: "Ounce", value: "oz" },
  { label: "Pound", value: "lb" }
];

export const volumeUnits: Unit[] = [
  { label: "Milliliter", value: "ml" },
  { label: "Liter", value: "l" },
  { label: "Cubic meter", value: "m3" },
  { label: "Teaspoon", value: "tsp" },
  { label: "Tablespoon", value: "tbsp" },
  { label: "Cup", value: "cup" },
  { label: "Pint", value: "pt" },
  { label: "Quart", value: "qt" },
  { label: "Gallon", value: "gal" }
];