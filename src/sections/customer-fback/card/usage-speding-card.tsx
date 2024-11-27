import Image from "next/image";

export default function UsageSpendingCard() {
  return (
    <div className="flex flex-col px-4 py-5 gap-[22px] bg-card ">
      <div>
        <div className="flex flex-col">
          <span>Spendings</span>
          <span className="text-[26px]/[117%] font-medium">
            Brooklyn Simmons
          </span>
        </div>
        <Image
          src="/img-png/chart-spending.png"
          width={300}
          height={214}
          alt="chart-spending-graph"
          className="min-w-[300px] h-[214px] xl:min-w-[306px]"
          sizes="(min-width: 768px) 328px, 232px"
        />
      </div>

      <div className="p-5 bg-card">
        <span>Usage</span>

        <div>
          <div></div>
          <span className="text-[12px]/[150%] font-normal tracking-[-0.5] text-gray-400">
            80 GB out of 100 GB used
          </span>
        </div>
      </div>
    </div>
  );
}
