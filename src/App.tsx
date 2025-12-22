import LengthConverter from "@/components/LengthConverter";
import AreaConverter from "@/components/AreaConverter";
import WeightConverter from "@/components/WeightConverter";
import VolumeConverter from "@/components/VolumeConverter";
import SpeedConverter from "@/components/SpeedConverter";
import TemperatureConverter from "@/components/TemperatureConverter";
import CurrencyConverter from "@/components/CurrencyConverter";

export default function App() {
  return (
    <main className="p-0 flex flex-col gap-4 items-center w-full min-h-screen overflow-x-hidden sm:justify-center sm:p-10">
      <LengthConverter />
      <AreaConverter />
      <WeightConverter />
      <VolumeConverter />
      <SpeedConverter />
      <TemperatureConverter />
      <CurrencyConverter />
    </main>
  );
}