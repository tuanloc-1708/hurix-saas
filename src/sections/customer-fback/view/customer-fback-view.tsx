import GlobalIcon from "@/assets/icons-svg/golbal-svg";
import CustomerFbackCard from "../card/customer-fback-card";
import AmazingLabe from "@/components/ui/label/amazing-label";
import StarIcon from "@/assets/icons-svg/star-icon-svg";
import UsageSpendingCard from "../card/usage-speding-card";

export const content = [
  {
    icon: <GlobalIcon width={24} height={24} viewBox={"0 0 24 24"} />,
    title: "Faster deployment",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    icon: <StarIcon width={24} height={24} viewBox={"0 0 24 24"} />,
    title: "Faster deployment",
    description: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default function CustomerFbackView() {
  return (
    <div className="container px-4 flex flex-col items-center justify-center">
      <span className="text-[40px]/[123%] text-center font-normal tracking-[-0.9px]">
        Customer Feedback Data Intelligence Leader
      </span>
      <div className="w-full flex flex-col">
        <CustomerFbackCard />

        <div className="flex flex-col gap-8 mb-[71px]">
          <div>
            <AmazingLabe />
            <span className="text-[30px]/[126%] tracking-[-1.4px] font-normal">
              Streamlined collaboration in easiest ways
            </span>
            <p className="text-[14px]/[171%] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at est ut odio cursus efficitur.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {content.map((item, index) => (
              <div key={index} className="flex flex-row gap-4 ">
                <div className="flex items-center justify-center bg-card w-[48px] h-[48px] rounded-[24px] ">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px]/[145%] font-medium">
                    {item.title}
                  </span>
                  <span className="text-[14px]/[171%] font-normal">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <UsageSpendingCard />
      </div>
    </div>
  );
}
