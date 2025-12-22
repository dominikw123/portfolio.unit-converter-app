import { Card, CardContent } from "@/components/ui/card";

export default function ConverterWrapper({ children }: { children: React.ReactNode; }) {
  return (
    <Card className="flex flex-col items-center justify-center h-full min-h-screen w-screen shadow-none relative p-0 sm:min-h-auto sm:w-full sm:max-w-lg sm:border-gray-200 sm:rounded-xl sm:shadow-sm">
      <CardContent className="flex flex-col gap-4 min-w-full max-w-[450px] sm:max-w-xl min-h-screen max-h-auto sm:min-h-auto p-5">
        {children}
      </CardContent>
    </Card>
  );
}