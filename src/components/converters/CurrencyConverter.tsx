import ConverterWrapper from "@/components/ConverterWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ThreeDotsLoader from "@/components/ThreeDotsLoader";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import { currencyUnits, type CurrencyCode } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CurrencyConverter() {
  const { value, setValue, from, setFrom, to, setTo, result, setResult, loading, error, convert, swap } = useCurrencyConverter();

  const handleFromChange = (value: string) => {
    setFrom(value as CurrencyCode);
    setResult(null);
  };

  const handleToChange = (value: string) => {
    setTo(value as CurrencyCode);
    setResult(null);
  };

  const handleSwap = () => swap();

  return (
    <ConverterWrapper title="Currency Converter">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[2fr_1fr] grid-rows-1 gap-2 w-full sm:grid-cols-[185px_auto_185px] sm:items-center">
          <div className="flex flex-col gap-1 min-w-[185px]">
            <Label htmlFor="from" className="font-medium text-sm text-gray-500 w-full">From:</Label>
            <Select name="from" value={from} onValueChange={handleFromChange}>
              <SelectTrigger className="font-medium px-4 w-full">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {currencyUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>{unit.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex row-span-2 mt-5 ml-3 items-center sm:justify-center sm:mt-0 sm:ml-0">
            <Button variant="outline" size="icon-lg" className="p-0 rounded-full" onClick={handleSwap}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </Button>
          </div>
          <div className="flex flex-col gap-1 min-w-[185px]">
            <Label htmlFor="to" className="font-medium text-sm text-gray-500 w-full">To:</Label>
            <Select name="to" value={to} onValueChange={handleToChange}>
              <SelectTrigger className="font-medium px-4 w-full">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {currencyUnits.map((unit) => (
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
            {loading && (
              <>
                <Label htmlFor="result" className="font-medium text-sm text-gray-500">Result:</Label>
                <ThreeDotsLoader />
              </>
            )}
            {!loading && error && (
              <>
                <Label htmlFor="result" className="font-medium text-sm text-gray-500">Result:</Label>
                <p id="error" className="font-medium text-red-600 text-md"> {error} </p>
              </>
            )}
            {!loading && !error && result !== null && from !== to && (
              <>
                <Label htmlFor="result" className="font-medium text-sm text-gray-500">Result:</Label>
                <p id="result" className="font-medium text-green-600 text-md"> {result} {to} </p>
              </>
            )}
          </div>
          <Button size="lg" onClick={convert}>Convert</Button>
        </div>
      </div>
    </ConverterWrapper>
  );
}