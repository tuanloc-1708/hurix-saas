import { cn } from "@/utils/cn";
import Link from "next/link";
import "@/styles/style-bg-btn.css";
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
          " text-[13px] text-white leading-5 hover:bg-pink-gradient hover:bg-clip-text font-normal link",
          className
        )}
      >
        {children}
      </Link>
    </div>
  );
}
