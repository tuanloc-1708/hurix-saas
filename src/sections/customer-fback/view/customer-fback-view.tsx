import CustomerFbackCard from "../card/customer-fback-card";
import AmazingLabe from "@/components/ui/label/amazing-label";

export default function CustomerFbackView() {
  return (
    <div className="container px-4 flex flex-col items-center justify-center">
      <span className="text-[40px]/[123%] text-center font-normal tracking-[-0.9px]">
        Customer Feedback Data Intelligence Leader
      </span>
      <div className="w-full flex flex-col">
        <CustomerFbackCard />

        <div className="flex flex-col gap-8">
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

          <div>adasdadas</div>
        </div>
      </div>
    </div>
  );
}
