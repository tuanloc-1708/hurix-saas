import Image from "next/image";
import "../../our-words/style-our-word.css";

export const content = [
  {
    id: 1,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
  {
    id: 2,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "This finance app template is a game-changer! It’s user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. I highly recommend it for anyone looking to take control of their finances.",
  },
  {
    id: 3,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "This finance app template is a game-changer! It’s user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. I highly recommend it for anyone looking to take control of their finances.",
  },
  {
    id: 4,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
  {
    id: 5,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
  {
    id: 6,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "This finance app template is a game-changer! It’s user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. I highly recommend it for anyone looking to take control of their finances.",
  },
  {
    id: 7,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "This finance app template is a game-changer! It’s user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. I highly recommend it for anyone looking to take control of their finances.",
  },
  {
    id: 8,
    firstName: "Lorri",
    lastName: "Warf",
    info: "@Manter.",
    role: "Marketing Leader",
    describe:
      "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
  },
];

export default function OurWordsCard() {
  return (
    <div className="max-w-[1536px] relative overflow-hidden ">
      <div className="black-gradient absolute top-0 left-0 right-0 bottom-0 z-10" />
      <div className="grid grid-rows-2 grid-flow-col gap-6 relative z-0 w-[1600px] ml-[-192px] md:ml-0 3xl:ml-[-0.6%]">
        {content.map((item) => (
          <>
            <div
              key={item.id}
              className="min-w-[384px] p-[21px] bg-card flex flex-col gap-5"
            >
              <div className="flex flex-col gap-5">
                <div className="p-2 bg-card flex flex-row gap-4">
                  <Image
                    src="/logo-webp/avartar.webp"
                    width={48}
                    height={48}
                    alt="chart-spending-graph"
                    className="min-w-[48px] h-[48px]"
                  />
                  <div className="flex flex-col">
                    <span>
                      {item.firstName} {item.lastName}
                    </span>
                    <span>
                      {item.role}
                      <span className="text-pink-gradient"> {item.info}</span>
                    </span>
                  </div>
                </div>
                &quot;{item.describe}&quot;
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
