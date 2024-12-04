import Image from "next/image";

const content = [
  {
    id: 1,
    imgBlog: "/blog-png/blog-1.png",
    type: "Ecommerce",
    title: "Future For Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum at est ut odio.",
    imgAuthor: "/logo-webp/avartar.webp",
    firstName: "Guy",
    lastName: "Hawkins",
  },
  {
    id: 2,
    imgBlog: "/blog-png/blog-2.png",
    type: "Optimizing",
    title: "Future For Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum at est ut odio.",
    imgAuthor: "/logo-webp/avartar.webp",
    firstName: "Darlene",
    lastName: "Robertson",
  },
  {
    id: 3,
    imgBlog: "/blog-png/blog-3.png",
    type: "Marketing",
    title: "Future For Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum at est ut odio.",
    imgAuthor: "/logo-webp/avartar.webp",
    firstName: "Theresa",
    lastName: "Webb",
  },
];

export default function BlogCard() {
  return (
    <div className="px-3 flex flex-wrap gap-3 items-center justify-center">
      {content.map((item) => (
        <>
          <div key={item.id} className="max-w-[320px] flex flex-col gap-5">
            <Image
              src={item.imgBlog}
              width={320}
              height={240}
              alt="blog-1"
              className="min-w-[320px] h-[240px] rounded-lg"
            />
            <div className="px-5 pb-5 flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <span className="text-pink-gradient text-[12px]/[140%] font-normal">
                  {item.type}
                </span>
                <span className="text-[24px]/[140%] font-medium">
                  {item.title}
                </span>
                <p className="text-[14px]/[171%] font-normal text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="max-w-11 h-11 p-[4.5px] border-gray-800 border-2 rounded-full flex justify-center items-center">
                  <Image
                    src={item.imgAuthor}
                    width={35}
                    height={35}
                    alt="chart-spending-graph"
                    className="min-w-[35px] h-[35px] "
                  />
                </div>
                <span>
                  {item.firstName} {item.lastName}
                </span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
