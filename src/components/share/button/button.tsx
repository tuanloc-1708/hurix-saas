import { cn } from "@/utils/cn";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-[282px]",
        "h-[38px]",
        "flex items-center justify-center",
        "bg-gradient-to-r from-[#FCD5BF] to-[#FFA9CC]",
        "text-black",
        "rounded-lg",
        "py-3",
        "font-medium",
        "hover:opacity-90 transition-opacity",
        className
      )}
    >
      {children}
    </button>
  );
}
