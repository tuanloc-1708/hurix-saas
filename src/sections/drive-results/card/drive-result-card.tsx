import Button from "@/components/ui/button/button";
import "@/styles/style-bg-graph.css";
import Image from "next/image";
import CircleBullet from "../circle-bullet";

export const result = [
  { tittle: "SPENDING", number1: "2,3K", number2: "+11.4%" },
  { tittle: "ALLOCATION", number1: "1,6K", number2: "+4.0%" },
  { tittle: "AMOUNT", number1: "1,1K", number2: "+7.0%" },
];

export default function DriveResultCard() {
  return (
    <div className="relative h-[400px]">
      <div className="absolute scale-75 right-[-4%] xl:right-[10%] 2xl:right-[43%] 3xl:right-[47%] w-[408px] xl:w-[539px] p-[26px] xl:p-[35px] flex flex-col gap-[27px] xl:gap-[36px] bg-card ">
        <span className="text-gray-400 text-[10px]/[129%] xl:text-[14px]/[129%] tracking-[-0.378px] xl:tracking-[-0.5px]">
          ACCENTURE ANALYSIS
        </span>

        <div className="w-[365px] h-[251px] flex justify-between gap-[37px] xl:gap-[59px]">
          <div className="flex flex-col gap-[21px] xl:gap-[28px]">
            <span className="text-[36px]/[121%] xl:text-[48px]/[121%] tracking-[-1.514px] xl:tracking-[-2px] font-medium">
              12,3K
            </span>
            <Image
              src="/img-png/accenture-analysis.png"
              width={232}
              height={145}
              alt="accenture-analysis-graph"
              className="min-w-[232px] h-[145px] xl:min-w-[306px]"
              sizes="(min-width: 768px) 350px, 232px"
            />
          </div>

          <div className="flex flex-col gap-11 xl:gap-[58px]">
            {result.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="flex items-center gap-[5px] xl:gap-2">
                    <CircleBullet className="w-[4.5px] h-[4.5px]" />
                    <span className="text-gray-400 text-[11px]/[128%] xl:text-[14px]/[128%] tracking-[-0.378px] xl:tracking-[-0.5px] font-semibold">
                      {item.tittle}
                    </span>
                  </div>

                  <div className=" flex gap-[4.5px] xl:gap-[6px] items-center ">
                    <span className="text-[18px]/[117%] xl:text-6/[117%] tracking-[-0.757px] font-medium">
                      {item.number1}
                    </span>
                    <Button className="h-4 px-[3px] xl:[4px] py-[1.5px] xl:py-[2px] rounded-[3px] text-center text-[9px]/[133%] xl:text-[12px]/[133%] font-medium">
                      {item.number2}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <Image
        src="/img-png/tranparent-pink.png"
        width={204}
        height={700}
        alt="Spending"
        className="absolute max-w-full 2xl:top-[-50%] 2xl:right-[13%] 3xl:right-[20%] w-[204px] h-[700px] rotate-90 2xl:w-[565px] 2xl:[179px]"
        sizes="(min-width: 900px) 565px, 365px"
        unoptimized
      /> */}

      <div>
        <div className="xl:z-10 absolute top-[58%] xl:top-[5%] right-[20%] xl:right-[15%] 3xl:right-[23%] 2xl:right-[11%] xl:w-[261px] xl:h-[226px] px-[21px] xl:px-[34px] py-[17px] xl:py-[23px] bg-card flex flex-col gap-2 xl:gap-4">
          <span className="text-[9px]/[128%] xl:text-gray-400 xl:text-[14px]/[129%] font-semibold tracking-[-0.32px]">
            ALLOCATION
          </span>
          <span className="text-[30.713px]/[121%] xl:text-[48px]/[121%] font-medium tracking-[-1.28px] xl:tracking-[-2px]">
            89%
          </span>
          <Image
            src="/img-png/allocate.png"
            width={123}
            height={23}
            alt="allocate-graph"
            className="min-w-[123px] h-[23px] xl:min-w-[192px] xl:min-h-[35px]"
            sizes="(min-width: 768px) 193px, 123px"
          />
          <span className="text-gray-400 text-[7.678px]/[150%] xl:text-[12px]/[150%] tracking-[-0.32px] xl:tracking-[-0.5px] font-semibold">
            1 day ago
          </span>
        </div>

        <div className="xl:z-0 hidden absolute xl:top-[35%] xl:right-[1%] 3xl:right-[15%]   2xl:flex xl:flex-col xl:w-[261px] xl:h-[226px] px-[21px] xl:px-[34px] py-[17px] xl:py-[23px] bg-card gap-2 xl:gap-4">
          <span className="xl:text-gray-400 xl:text-[14px]/[129%] font-semibold tracking-[-0.32px]">
            ALLOCATION
          </span>
          <span className="xl:text-[48px]/[121%] font-medium tracking-[-1.28px] xl:tracking-[-2px]">
            10%
          </span>
          <Image
            src="/img-png/allocate-10.png"
            width={123}
            height={23}
            alt="allocate-graph"
            className="min-w-[123px] h-[23px] xl:min-w-[192px] xl:min-h-[35px]"
            sizes="(min-width: 768px) 193px, 123px"
          />
          <span className="text-gray-400 text-[7.678px]/[150%] xl:text-[12px]/[150%] tracking-[-0.32px] xl:tracking-[-0.5px] font-semibold">
            30 mins ago
          </span>
        </div>
      </div>
    </div>
  );
}
