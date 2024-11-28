import Button from "@/components/ui/button/button";
import Image from "next/image";
const graph = [
  {
    name: "Pound",
    img: "/img-png/graph1.png",
    value: "$23,378",
    rate: "+3.4%",
  },
  {
    name: "Dollars",
    img: "/img-png/graph2.png",
    value: "$89,293",
    rate: "-0.1%",
  },
];

export default function CustomerFbackCard() {
  return (
    <div className="mx-auto 3xl:mx-0">
      <div className="p-[28px] w-[350px] bg-card flex flex-col  gap-9">
        <div className="flex flex-col gap-6">
          <span className="text-[14px]/[129%] tracking-[-0.5px] font-semibold">
            Your Assets
          </span>
          <div>
            <span className="text-[48px]/[121%]">124,420.50</span>
            <p>
              You gained <span className="text-pink-gradient">+$420.00</span>{" "}
              this week
            </p>
          </div>

          <div className="flex gap-[6px]">
            <Button className="px-[10px] py-[6px] rounded-[38px]">
              All Assets
            </Button>

            <Button className="px-[10px] py-[6px] rounded-[38px]">
              Dollar
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {graph.map((item, index) => {
            const isPositive = parseFloat(item.rate) > 0;
            const isNegative = parseFloat(item.rate) < 0;
            return (
              <div
                key={index}
                className="flex px-3 py-4 bg-card gap-4 text-[14px]/[129%]"
              >
                <span>{item.name}</span>
                <Image
                  src={item.img}
                  width={40}
                  height={20}
                  alt="accenture-analysis-graph"
                  className="min-w-[40px] h-[20px] xl:min-w-[40px]"
                />
                <span>{item.value}</span>
                <span
                  className={`flex items-center px-1 rounded-[28px] text-[12px]/[133%] font-medium ${
                    isPositive
                      ? "bg-[rgba(17,213,63,0.06)] text-[#17CD16]"
                      : isNegative
                      ? "bg-[rgba(255,13,0,0.07)] text-[#F62021]"
                      : "bg-card"
                  }`}
                >
                  {item.rate}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
