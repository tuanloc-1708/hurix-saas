import { cn } from "@/utils/cn";
import "./style-results.css";

interface CircleBulletProps {
  className?: string;
}

export default function CircleBullet({ className }: CircleBulletProps) {
  return (
    <div>
      <div
        className={cn(
          "w-10",
          "h-10",
          "rounded-full",
          "pink-gradient",
          className
        )}
      />
    </div>
  );
}
