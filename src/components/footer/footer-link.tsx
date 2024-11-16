import { cn } from "@/utils/cn";
import Link from "next/link";
import "./style.css";
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
          " text-[13px] text-white leading-5 hover:bg-pink-gradient hover:bg-clip-text font-normal footer-link",
          className
        )}
        // className=" text-[13px] text-white hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4 font-normal"
      >
        {children}
      </Link>
    </div>
  );
}
