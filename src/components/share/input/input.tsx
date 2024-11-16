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
        "backdrop-blur-[3px]",
        // "bg-[linear-gradient(97deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.03)_100%),rgba(255,255,255,0.01)]",
        "bg-custom-input",
        "bg-[rgba(255,255,255,0.01)]",
        "stroke-[#FFFFFF/10]",
        "border",
        "border-white/10",
        "rounded-lg",
        "text-gray-600",
        "leading-4",
        "placeholder:text-[rgba(255,255,255,0.48)]",
        "placeholder:leading-4"
      )}
    />
  );
}
