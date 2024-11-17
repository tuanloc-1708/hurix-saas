import Image from "next/image";
import ".././styles-hero.css";
import Button from "@/components/ui/button/button";
export default function HeroCard() {
  return (
    <div className="relative h-[600px] flex flex-col items-center">
      <div className="absolute w-[257px] h-[221px] p-[21px] flex flex-col bg-card gap-[22px] ">
        <span className=" text-gray-400 text-[8.803px]/[129%] font-semibold">
          YOUR CREDIT SCORE
        </span>
        <div className="flex justify-center">
          <Image
            src="/img-png/credit-score.png"
            width={177}
            height={94}
            alt="Credit score"
          />
        </div>

        <div className="flex flex-col text-center">
          <span className="text-gray-400 text-[10px]/[125%] font-semibold tracking-[-0.314px]">
            Your Credit Score is average
          </span>
          <span className="text-gray-400 text-[8.8px]/[129%] font-medium tracking-[-0.314px]">
            Last Check on 21 Apr
          </span>
        </div>
      </div>

      <div className="absolute top-[193px]  w-[409px] h-[274px] p-[21px] flex flex-col gap-[22px] bg-card ">
        <div className="flex flex-col gap-[11.58px]">
          <span className=" text-gray-400 text-[11px]/[129%] font-medium tracking-[-0.385px]">
            Spendings
          </span>
          <span className="text-[27px]/[117%] tracking-[-1.541px]">
            Brooklyn Simmons
          </span>
        </div>

        <Image
          src="/img-png/spendings.png"
          width={365}
          height={150}
          alt="Spending"
        />

        <div className="flex justify-between text-[11px]/[129%] tracking-[0.385px] font-medium">
          <span className="text-gray-400">Current margin</span>
          <span className="text-pink-gradient">$350.00 / $640.00</span>
        </div>
      </div>

      <div className="absolute top-[327px] right-11  w-[185px] h-[61px]  flex items-center justify-around  bg-card">
        <div className="flex flex-col">
          <span className="text-[17px]/[117%] font-semibold tracking-[-0.355px]">
            $124,20
          </span>
          <span className="text-gray-400 text-[8.5px]/[133%] font-medium">
            21 Apr, 19:59
          </span>
        </div>
        <Button className="w-8 h-[15px] text-[8.529px]/[133%] font-medium rounded-[31px]">
          +3.4%
        </Button>
      </div>
    </div>
  );
}
