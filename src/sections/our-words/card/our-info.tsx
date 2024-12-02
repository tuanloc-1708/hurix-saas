import Image from "next/image";

export const content = [
  {
    name: "Lorri Warf",
    info: "Marketing Leader @Manter.",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
  {
    name: "Lorri Warf",
    info: "Marketing Leader @Manter.",
    describe:
      "This finance app template is a game-changer! It's user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. I highly recommend it for anyone looking to take control of their finances.",
  },
  {
    name: "Lorri Warf",
    info: "Marketing Leader @Manter.",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
  {
    name: "Lorri Warf",
    info: "Marketing Leader @Manter.",
    describe:
      "This finance app template is a game-changer! It's user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. I highly recommend it for anyone looking to take control of their finances.",
  },
  {
    name: "Lorri Warf",
    info: "Marketing Leader @Manter.",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
];

export default function OurWordsCard() {
  return (
    <>
      {content.map((item, index) => (
        <div key={index}>
          <div className="p-[21px] bg-card flex flex-col gap-5">
            <div className="p-2 bg-card flex flex-row gap-4">
              <Image
                src="/logo-webp/avartar.webp"
                width={48}
                height={48}
                alt="chart-spending-graph"
                className="min-w-[48px] h-[48px]"
              />
              <div className="flex flex-col">
                <span>{item.name}</span>
                <span className="">{item.info}</span>
              </div>
            </div>
            &quot;{item.describe}&quot;
          </div>
        </div>
      ))}
    </>
  );
}
