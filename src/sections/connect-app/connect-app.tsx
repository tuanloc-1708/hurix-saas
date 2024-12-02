import AmazingLabel from "@/components/ui/label/amazing-label";
import Image from "next/image";

export const content = [
  {
    icon: "/mark-png/Mark-1.png",
    name: "Mark-1",
    w: 37,
    h: 19,
    title: "MaIilstack",
    description: "Description MaIilstack",
  },
  {
    icon: "/mark-png/Mark-2.png",
    name: "Mark-2",
    w: 35,
    h: 35,
    title: "MaIilstack",
    description: "Description MaIilstack",
  },
  {
    icon: "/mark-png/Mark-3.png",
    name: "Mark-3",
    w: 35,
    h: 35,
    title: "MaIilstack",
    description: "Description MaIilstack",
  },
  {
    icon: "/mark-png/Mark-4.png",
    name: "Mark-4",
    w: 43,
    h: 14,
    title: "MaIilstack",
    description: "Description MaIilstack",
  },
  {
    icon: "/mark-png/Mark-5.png",
    name: "Mark-5",
    w: 37,
    h: 37,
    title: "MaIilstack",
    description: "Description MaIilstack",
  },
];

export default function ConnectApps() {
  return (
    <div className="container mx-auto flex flex-col justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <AmazingLabel />
        <span className="max-w-[443px] text-center text-[33px]/[134%] 3xl:text-[38px]/[134%] font-normal tracking-[-0.48px]">
          Connect the apps we integrate with
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {content.map((item, index) => (
          <div key={index}>
            <div className="w-[324px] p-5 bg-card flex gap-4 rounded-[12px]">
              <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[48px] bg-pink-gradient">
                <Image
                  src={item.icon}
                  width={item.w}
                  height={item.h}
                  // className="max-w-[37px] max-h-[19px] "
                  style={{ maxWidth: `${item.w}px`, maxHeight: `${item.h}px` }}
                  alt={item.name}
                />
              </div>

              <div className="flex flex-col justify-center ">
                <span>{item.title}</span>
                <span>{item.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
