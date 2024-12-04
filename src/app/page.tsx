import { Footer } from "@/components/footer";
import Header from "@/components/header";
import BlogArticleView from "@/sections/blogs-articles/view/blog-article-view";
import ListBrand from "@/sections/brandname/list-brand";
import DownloadViewCard from "@/sections/business-purpose/view/download-view-card";
import ConnectApps from "@/sections/connect-app/connect-app";
import CustomerFbackView from "@/sections/customer-fback/view/customer-fback-view";
import DriveResultView from "@/sections/drive-results/view/drive-result-view";
import HeroView from "@/sections/hero/view/hero-view";
import OurWordsView from "@/sections/our-words/view/our-words-view";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[72px]">
      <Header />
      <HeroView />
      <ListBrand />
      <DriveResultView />
      <CustomerFbackView />
      <ConnectApps />
      <OurWordsView />
      <DownloadViewCard />
      <BlogArticleView />
      <Footer />
    </div>
  );
}
