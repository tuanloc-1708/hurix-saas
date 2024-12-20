import GlobalIcon from "@/assets/icons-svg/golbal-svg";
import CustomerFbackCard from "../card/customer-fback-card";
import AmazingLabe from "@/components/ui/label/amazing-label";
import StarIcon from "@/assets/icons-svg/star-icon-svg";
import UsageSpendingCard from "../card/usage-speding-card";
import CheckVerifiedIcon from "@/assets/icons-svg/check-verifile-icon-svg";
import Button from "@/components/ui/button/button";

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

export const content2 = [
  {
    icon: <CheckVerifiedIcon width={24} height={24} viewBox={"0 0 24 24"} />,
    title: "Free migration",
  },
  {
    icon: <CheckVerifiedIcon width={24} height={24} viewBox={"0 0 24 24"} />,
    title: "Simplified onboarding",
  },
];
export default function CustomerFbackView() {
  return (
    <div className="container px-4 flex flex-col items-center justify-center gap-[34px]">
      <span className="max-w-[485px] text-[40px]/[123%] text-center font-normal tracking-[-0.9px]">
        Customer Feedback Data Intelligence Leader
      </span>
      <div className="container 3xl:flex-row-reverse 3xl:space-x-0 w-full flex flex-col justify-center gap-[34px]">
        <CustomerFbackCard />

        <div className="w-fit mx-auto 3xl:mr-[138px]">
          <div className="flex flex-col gap-4">
            <AmazingLabe />
            <span className="max-w-[429px] mb-3 text-[30px]/[126%] tracking-[-1.4px] font-normal">
              Streamlined collaboration in easiest ways
            </span>
            <p className="max-w-[390px] text-[14px]/[171%] font-normal">
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
                <div className="flex flex-col left-0">
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
      </div>

      <div className="w-[350px] flex flex-col 3xl:flex-row gap-6 justify-center">
        <div className="3xl:mr-[138px]">
          <UsageSpendingCard />
        </div>

        <div className="flex flex-col  min-w-[350px]">
          <div className="flex flex-col gap-[11px]">
            <AmazingLabe />
            <span className="mb-3 text-[34px]/[126%] tracking-[-2px] font-normal">
              Workflow without any Streamlining
            </span>
          </div>

          <div>
            <div className=" flex flex-col gap-6">
              <p className="text-[14px]/[171%] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum at est ut odio cursus efficitur.
              </p>

              <p className="text-[14px]/[171%] font-normal">
                Cras pharetra consectetur mi, nec eleifend justo pharetra vel.
                Praesent interdum lacinia varius.
              </p>

              <div className="flex gap-4">
                {content2.map((item, index) => (
                  <div
                    key={index}
                    className="flex text-[14px]/[171%] font-normal gap-2"
                  >
                    <div>{item.icon}</div>

                    <span className="text-[14px]/[171%]">{item.title}</span>
                  </div>
                ))}
              </div>

              <Button className="px-4 py-[9px] max-w-[117px] rounded-[54px]">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
