import AmazingLabel from "@/components/ui/label/amazing-label";
import DownloadCard from "../card/download-card";

export default function DownloadViewCard() {
  return (
    <div className="container">
      <div className="mb-10 flex flex-col gap-4 items-center justify-center">
        <AmazingLabel />
        <span className="max-w-[350px] text-[40px]/[120%] font-normal tracking-[-0.48px] text-center">
          Build a business with purpose
        </span>
      </div>
      <div className="relative">
        <div className="">
          <DownloadCard />
        </div>
        <div className="">
          <DownloadCard />
        </div>
        <div className="relative">
          <DownloadCard />
        </div>
      </div>
    </div>
  );
}
