import GlobalIcon from "@/assets/icons-svg/golbal-svg";
import StarIcon from "@/assets/icons-svg/star-icon-svg";
import Button from "@/components/ui/button/button";
import "../../business-purpose/style-card-download.css";

export default function DownloadCard() {
  return (
    <div className="flex flex-col gap-6 text-[14.5px]/[172%] text-gray-400 w-[384px] px-5 font-normal py-[30px] card-download">
      <div>
        It’s intuitive, functional, easy-to-setup and presents content in an
        interactive and interesting.
      </div>

      <div className="flex flex-col gap-[15px]">
        <div className="p-2 bg-card text-[14px]/[145%]">Hello@gmail.com</div>
        <Button className="w-full rounded-[9px] text-[14px]/[140%] font-medium">
          Download Now!
        </Button>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[11px]">
            <GlobalIcon width={24} height={24} viewBox={"0 0 24 24"} />
            <span className="text-[14px]/[145%] font-medium">
              Integrate Algorithms
            </span>
          </div>

          <div className="flex gap-[11px]">
            <StarIcon width={24} height={24} viewBox={"0 0 24 24"} />
            <span className="text-[14px]/[145%] font-medium">
              Comment Collection
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
