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
      <div className=" absolute right-[0%] w-[408px] p-[26px] flex flex-col gap-[27px] bg-card ">
        <span className="text-gray-400 text-[10px]/[129%] tracking-[-0.378px]">
          ACCENTURE ANALYSIS
        </span>

        <div className="w-[365px] h-[251px] flex gap-[45px] ">
          <div className="flex flex-col gap-[21px]">
            <span className="text-[36px]/[121%] tracking-[-1.514px] font-medium">
              12,3K
            </span>
            <Image
              src="/img-png/accenture-analysis.png"
              width={232}
              height={145}
              alt="accenture-analysis-graph"
            />
          </div>

          <div className="flex flex-col gap-11">
            {result.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="flex items-center gap-[6px] ">
                    <CircleBullet className="w-[4.5px] h-[4.5px]" />
                    <span className="text-gray-400 tex-[10px]/[128%] tracking-[-0.378px] font-semibold">
                      {item.tittle}
                    </span>
                  </div>

                  <div className=" flex gap-[4.5px] rounded-[3px] items-center">
                    <span className=" text-[18px]/[117%] tracking-[-0.757px] font-medium">
                      {item.number1}
                    </span>
                    <Button className="h-4 px-[3px] py-[1.5px] rounded-[3px] text-center text-[9px]/[133%] font-medium">
                      {item.number2}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-[60%] right-[8%]  w-[167px] h-[145px] px-[21px] py-[17px] bg-card flex flex-col gap-2">
        <span className="text-[9px]/[128%] font-semibold tracking-[-0.32px]">
          ALLOCATION
        </span>
        <span className="text-[30.713px]/[121%] font-medium tracking-[-1.28px] ">
          89%
        </span>
        <Image
          src="/img-png/allocate.png"
          width={123}
          height={23}
          alt="allocate-graph"
        />
        <span className="text-gray-400 text-[7.678px]/[150%] tracking-[-0.32px] font-semibold">
          1 day ago
        </span>
      </div>
    </div>
  );
}
