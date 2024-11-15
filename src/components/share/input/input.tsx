import { cn } from "@/utils/cn";

interface InputProps {
  className?: string;
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "w-[282px]",
        "h-[38px]",
        "px-4",
        "py-3",
        "bg-[#171717]",
        "border",
        "border-gray-500",
        "rounded-lg",
        "text-gray-600",
        "placeholder:text-slate-700"
      )}
    />
  );
}
