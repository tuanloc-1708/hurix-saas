import AmazingLabel from "@/components/ui/label/amazing-label";
import HeroCard from "../card/hero-card";
import Button from "@/components/ui/button/button";

export default function HeroView() {
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col xl:max-w-[604px] mx-auto pb-10 items-center justify-center gap-8 ">
        <div className="flex flex-col items-center justify-center">
          <AmazingLabel />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className=" capitalize text-[3.5rem]/[120%] text-center tracking-[-0.56px] ">
            Manage your Data for Simplified Dashboard.
          </h1>
          <p className="px-5 text-center text-[14px] leading-[24px] font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at est ut odio cursu fficitur. Cras pharetra consectetur mi, nec
            eleifend justo pharetra vel.
          </p>
        </div>

        <Button className="w-[99px] h-[36px] rounded-[54px]">
          Get Started
        </Button>
      </div>
      <HeroCard />
    </div>
  );
}
