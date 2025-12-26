export default function ThreeDotsLoader() {
  return (
    <div className="flex items-center gap-1 h-[24px] ml-1">
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-0"></span>
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
    </div>
  );
}