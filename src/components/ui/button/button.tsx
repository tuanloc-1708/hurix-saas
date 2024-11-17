import { cn } from "@/utils/cn";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        // "w-[282px]",
        // "h-[38px]",
        "flex items-center justify-center",
        "bg-pink-gradient",
        "text-black",
        "text-[13px]",
        "rounded-lg",
        "py-3",
        "font-normal",
        "leading-4",
        "hover:opacity-90 transition-opacity",
        className
      )}
    >
      {children}
    </button>
  );
}
