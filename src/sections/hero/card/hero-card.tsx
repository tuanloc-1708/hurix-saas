import Image from "next/image";
import ".././styles-hero.css";
import Button from "@/components/ui/button/button";
export default function HeroCard() {
  return (
    <div className="container  px-[111px]  flex flex-col justify-center">
      <div className="relative max-w-[1200px] h-[400px] flex flex-col items-center">
        <div className="absolute xl:right-[55%] w-[257px] h-[221px] p-[21px] flex flex-col bg-card gap-[22px] xl:w-[339px] xl:h-[283px]">
          <span className=" text-gray-400 text-[8.803px]/[129%] font-semibold">
            YOUR CREDIT SCORE
          </span>

          <Image
            src="/img-png/credit-score.png"
            width={177}
            unoptimized
            height={94}
            alt="Credit score"
            className="w-[177px] h-[94px] xl:w-[283px] xl:h-[150px]"
            sizes="(min-width: 900px) 283px, 177px"
            // layout="responsive"
          />

          <div className="flex flex-col text-center xl:tracking-[-0.5px]">
            <span className="text-gray-400 text-[10px]/[125%] font-semibold tracking-[-0.314px] xl:text-4/[125%] ">
              Your Credit Score is average
            </span>
            <span className="text-gray-400 text-[8.8px]/[129%] font-medium tracking-[-0.314px]">
              Last Check on 21 Apr
            </span>
          </div>
        </div>

        <div className="absolute scale-75 top-[35.9%] xl:top-[8%] right-[-100%] xl:right-[4%] w-[409px] h-[274px] p-[21px] flex flex-col gap-[22px] bg-card xl:w-[581px] xl:h-[367px] xl:p-[34px]">
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
            className="w-[365px] h-[150px] xl:w-[565px] xl:[179px]"
            sizes="(min-width: 900px) 565px, 365px"
            unoptimized
            // layout="responsive"
          />

          <div className="flex justify-between text-[11px]/[129%] tracking-[0.385px] font-medium xl:text-[17px]/[128%]">
            <span className="text-gray-400">Current margin</span>
            <span className="text-pink-gradient ">$350.00 / $640.00</span>
          </div>
        </div>

        <div className="absolute top-[97%] right-[-40%] xl:top-[80%] xl:right-[-5%]  w-[185px] h-[61px]  flex items-center justify-around  bg-card xl:w-[295px] xl:h-[97px]">
          <div className="flex flex-col">
            <span className="text-[17px]/[117%] font-semibold tracking-[-0.355px] xl:text-[27px]/[117%]">
              $124,20
            </span>
            <span className="text-gray-400 text-[8.5px]/[133%] font-medium xl:text-[14px]/[135%]">
              21 Apr, 19:59
            </span>
          </div>
          <Button className="w-8 h-[15px] text-[8.529px]/[133%] font-medium rounded-[31px] xl:w-[51px] xl:h-6 xl:rounded-[49px]">
            +3.4%
          </Button>
        </div>
      </div>
    </div>
  );
}
