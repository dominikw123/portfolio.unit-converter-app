import ConverterWrapper from "@/components/ConverterWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { weightUnits, type Unit } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function WeightConverter() {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<Unit>(weightUnits[0]);
  const [to, setTo] = useState<Unit>(weightUnits[0]);
  const [result, setResult] = useState<number>(0);

  const convert = (value: number, from: Unit, to: Unit) => {
    const factors: Record<Unit["value"], number> = {
      mg: 0.000001,
      g: 0.001,
      kg: 1,
      t: 1000,
      oz: 0.0283495,
      lb: 0.453592
    };

    return value * (factors[from.value] / factors[to.value]);
  };

  const handleFromChange = (value: string) => {
    setFrom(weightUnits.find((unit) => unit.value === value)!);
    setResult(0);
  };

  const handleToChange = (value: string) => {
    setTo(weightUnits.find((unit) => unit.value === value)!);
    setResult(0);
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setResult(0);
  };

  return (
    <ConverterWrapper title="Weight Converter">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex flex-col gap-1 min-w-[180px]">
            <Label htmlFor="from" className="font-medium text-sm text-gray-500 w-full">From:</Label>
            <Select name="from" value={from.value} onValueChange={handleFromChange}>
              <SelectTrigger className="font-medium px-4 w-full">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {weightUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button variant="outline" size="icon-lg" className="p-0 rounded-full" onClick={handleSwap}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </Button>
          </div>
          <div className="flex flex-col gap-1 min-w-[180px]">
            <Label htmlFor="to" className="font-medium text-sm text-gray-500 w-full">To:</Label>
            <Select name="to" value={to.value} onValueChange={handleToChange}>
              <SelectTrigger className="font-medium px-4 w-full">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {weightUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="amount" className="font-medium text-sm text-gray-500">Amount:</Label>
          <Input name="amount" className="font-medium px-4" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </div>
        <div className="flex items-center justify-between gap-2 h-[44px]">
          <div>
            {(result > 0 && to.value !== from.value) && (
              <>
                <Label htmlFor="result" className="font-medium text-sm text-gray-500">Result:</Label>
                <p id="result" className="font-medium text-green-600 text-md"> {result} {to.label} </p>
              </>
            )}
          </div>
          <Button size="lg" onClick={() => setResult(convert(value, from, to))}>Convert</Button>
        </div>
      </div>
    </ConverterWrapper>
  );
}