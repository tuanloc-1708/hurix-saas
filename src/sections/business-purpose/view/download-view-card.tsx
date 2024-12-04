import AmazingLabel from "@/components/ui/label/amazing-label";
import DownloadCard from "../card/download-card";

export default function DownloadViewCard() {
  return (
    <div className="container h-[506px] overflow-hidden">
      <div className="mb-10 flex flex-col gap-4 items-center justify-center">
        <AmazingLabel />
        <span className="max-w-[350px] text-[40px]/[120%] font-normal tracking-[-0.48px] text-center">
          Build a business with purpose
        </span>
      </div>
      <div className="relative">
        <div className="absolute scale-[.7] xl:scale-75 rotate-[-16deg] z-10 right-[16%] xl:right-[40%] 2xl:right-[43%]">
          <DownloadCard />
        </div>
        <div className="absolute scale-90 xl:scale-100 z-20 right-[-7%] xl:right-[25%] 2xl:right-[27%]">
          <DownloadCard />
        </div>
        <div className="absolute scale-[.7] xl:scale-75 rotate-[16deg] z-0 right-[-26%] xl:right-[11%] 2xl:right-[27%]">
          <DownloadCard />
        </div>
      </div>
    </div>
  );
}
