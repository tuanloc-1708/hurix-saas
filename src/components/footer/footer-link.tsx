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
        className="w-44 text-sm text-white hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
      >
        {children}
      </Link>
    </div>
  );
}
