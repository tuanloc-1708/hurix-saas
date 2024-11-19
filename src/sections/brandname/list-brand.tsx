import Image from "next/image";
import VerticalDash from "./vertical-dash";

export default function ListBrand() {
  return (
    <div className="container py-[92px] flex flex-col  items-center justify-center gap-4">
      <p className="text-[14px]/[24px]">
        Trusted by Top-tier product
        <span className="text-pink-gradient"> companies</span>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Image
          src="/logo-webp/plaid.webp"
          width={120}
          height={61}
          alt="Plaid logo"
        />
        <VerticalDash />
        <Image
          src="/logo-webp/griffin.webp"
          width={120}
          height={52}
          alt="Griffin logo"
        />
        <VerticalDash />

        <Image
          src="/logo-webp/airbnb.webp"
          width={140}
          height={63}
          alt="Airbnb logo"
        />
        <VerticalDash />

        <Image
          src="/logo-webp/patreon.webp"
          width={140}
          height={28}
          alt="Patreon logo"
        />
        <VerticalDash />

        <Image
          src="/logo-webp/helpscout.webp"
          width={160}
          height={40}
          alt="Help Scout logo"
        />
      </div>
    </div>
  );
}
