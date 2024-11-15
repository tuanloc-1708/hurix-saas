import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className=" text-[13px] text-white hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4 font-normal"
      >
        {children}
      </Link>
    </div>
  );
}
