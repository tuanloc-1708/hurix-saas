import DownloadCard from "../card/download-card";

export default function DownloadViewCard() {
  return (
    <>
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
    </>
  );
}
