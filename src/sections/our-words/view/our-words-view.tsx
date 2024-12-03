import OurWordsCard from "../card/our-info";
import Image from "next/image";

export default function OurWordsView() {
  return (
    <div className="container flex flex-col items-center justify-center gap-[110px]">
      <div className="flex flex-col max-w-[450px] justify-center items-center">
        <Image
          src="/mark-png/box-chat.png"
          width={80}
          height={84}
          alt="chart-spending-graph"
          className="min-w-[80px] h-[84px]"
        />
        <span className="text-[40px]/[131%] text-center">
          Don’t take our words Listen theirs
        </span>
      </div>

      <div className="flex">
        <OurWordsCard />
      </div>
    </div>
  );
}
