import ConverterWrapper from "@/components/ConverterWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { lengthUnits, type Unit } from "@/lib/types";
import { useState } from "react";

export default function LengthConverter() {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<Unit>(lengthUnits[0]);
  const [to, setTo] = useState<Unit>(lengthUnits[0]);
  const [result, setResult] = useState<number>(0);

  const convert = (value: number, from: Unit, to: Unit) => {
    const factors: Record<Unit["value"], number> = {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.34
    };

    return value * (factors[from.value] / factors[to.value]);
  };

  return (
    <ConverterWrapper title="Length Converter">
      <div className="flex flex-col gap-4">
        <Input className="font-medium px-4" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <div className="flex gap-2">
          <Select value={from.value} onValueChange={(value) => setFrom(lengthUnits.find((unit) => unit.value === value)!)}>
            <SelectTrigger className="font-medium px-4">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {lengthUnits.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={to.value} onValueChange={(value) => setTo(lengthUnits.find((unit) => unit.value === value)!)}>
            <SelectTrigger className="font-medium px-4">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {lengthUnits.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button className="max-w-fit" size="lg" onClick={() => setResult(convert(value, from, to))}>Convert</Button>
          <p className="text-2xl font-medium">{result} {to.label}</p>
        </div>
      </div>
    </ConverterWrapper>
  );
}