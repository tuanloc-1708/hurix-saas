import { cn } from "@/utils/cn";
import "./styles-label.css";

interface AmazingLabelProps {
  className?: string;
}

export default function AmazingLabel({ className }: AmazingLabelProps) {
  return (
    <div
      className={cn(
        "w-[148px]",
        "h-[30px]",
        "py-1",
        "px-4",
        "text-pink-gradient",
        "rounded-[20px]",
        "bg-label",
        "shadow-[0px_-4px_52px_0px_rgba(212,158,255,0.12)_inset] ",
        className
      )}
    >
      AmazingLabel
    </div>
  );
}
