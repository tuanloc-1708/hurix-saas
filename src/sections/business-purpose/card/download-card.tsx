import GlobalIcon from "@/assets/icons-svg/golbal-svg";
import StarIcon from "@/assets/icons-svg/star-icon-svg";
import Button from "@/components/ui/button/button";

export default function DownloadCard() {
  return (
    <div className="px-5 pt-[31px] bg-card">
      <div>
        It’s intuitive, functional, easy-to-setup and presents content in an
        interactive and interesting.
      </div>
      <div className="p-2 bg-card">Hello@gmail.com</div>
      <Button className="w-[342px] rounded-[9px]">Download Now!</Button>
      <div className="flex flex-col gap-[15px]">
        <div className="flex">
          <GlobalIcon width={24} height={24} viewBox={"0 0 24 24"} />
          <span>Integrate Algorithms</span>
        </div>

        <div className="flex">
          <StarIcon width={24} height={24} viewBox={"0 0 24 24"} />
          <span>Comment Collection</span>
        </div>
      </div>
    </div>
  );
}
