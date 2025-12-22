import LengthConverter from "@/components/converters/LengthConverter";
import AreaConverter from "@/components/converters/AreaConverter";
import WeightConverter from "@/components/converters/WeightConverter";
import VolumeConverter from "@/components/converters/VolumeConverter";
import SpeedConverter from "@/components/converters/SpeedConverter";
import TemperatureConverter from "@/components/converters/TemperatureConverter";
import CurrencyConverter from "@/components/converters/CurrencyConverter";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <main className="p-0 flex flex-col gap-4 items-center w-full min-h-screen overflow-x-hidden sm:justify-center sm:p-10">
      <LengthConverter />
      <Separator className="sm:hidden" />
      <AreaConverter />
      <Separator className="sm:hidden" />
      <WeightConverter />
      <Separator className="sm:hidden" />
      <VolumeConverter />
      <Separator className="sm:hidden" />
      <SpeedConverter />
      <Separator className="sm:hidden" />
      <TemperatureConverter />
      <Separator className="sm:hidden" />
      <CurrencyConverter />
    </main>
  );
}