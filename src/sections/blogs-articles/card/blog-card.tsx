import Image from "next/image";

const content = [
  {
    imgBlog: "/blog-png/blog-1.png",
    type: "Ecommerce",
    title: "Future For Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum at est ut odio.",
    author: "/logo-webp/avartar.webp",
    firstName: "Guy",
    lastName: "Hawkins",
  },
  {
    imgBlog: "/blog-png/blog-2.png",
    type: "Optimizing",
    title: "Future For Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum at est ut odio.",
    author: "/logo-webp/avartar.webp",
    firstName: "Darlene",
    lastName: "Robertson",
  },
  {
    imgBlog: "/blog-png/blog-3.png",
    type: "Marketing",
    title: "Future For Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum at est ut odio.",
    author: "/logo-webp/avartar.webp",
    firstName: "Theresa",
    lastName: "Webb",
  },
];

export default function BlogCard() {
  return (
    <>
      <div className="max-w-[320px] flex flex-col gap-5">
        <Image
          src="/blog-png/blog-1.png"
          width={320}
          height={240}
          alt="blog-1"
          className="min-w-[320px] h-[240px] rounded-lg"
        />
        <div className="px-5 flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <span className="text-pink-gradient text-[12px]/[140%] font-normal">
              Marketing
            </span>
            <span className="text-[24px]/[140%] font-medium">
              Future For Tech
            </span>
            <p className="text-[14px]/[171%] font-normal text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum
              at est ut odio.
            </p>
          </div>

          <div>
            <div className="">
              <Image
                src="/logo-webp/avartar.webp"
                width={35}
                height={35}
                alt="chart-spending-graph"
                className="min-w-[35px] h-[35px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
