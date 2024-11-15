import { cn } from "@/utils/cn";
import Link from "next/link";

interface FooterLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({
  href,
  children,
  className,
}: FooterLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className={cn(
          " text-[13px] text-white hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4 font-normal",
          className
        )}
        // className=" text-[13px] text-white hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4 font-normal"
      >
        {children}
      </Link>
    </div>
  );
}
