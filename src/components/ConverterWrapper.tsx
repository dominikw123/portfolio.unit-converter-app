import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ConverterWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export default function ConverterWrapper({ children, title }: ConverterWrapperProps) {
  return (
    <Card className="flex flex-col justify-center max-h-auto w-screen shadow-none gap-4 relative p-5 sm:w-full sm:max-w-lg sm:border-gray-200 sm:rounded-xl sm:shadow-sm">
      <CardHeader className="p-0 min-w-full max-w-[450px]">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 min-w-full max-w-[450px] sm:max-w-xl max-h-auto">
        {children}
      </CardContent>
    </Card>
  );
}