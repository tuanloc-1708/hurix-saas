import AmazingLabel from "@/components/ui/label/amazing-label";
import BlogCard from "../card/blog-card";

export default function BlogArticleView() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <AmazingLabel />
          <span className="text-[45px]/[120%] tracking-[-f]">
            Blogs & Articles
          </span>
        </div>
        <BlogCard />
      </div>
    </>
  );
}
