import { Footer } from "@/components/footer";
import Header from "@/components/header";
import ListBrand from "@/sections/brandname/list-brand";
import CustomerFbackView from "@/sections/customer-fback/view/customer-fback-view";
import DriveResultView from "@/sections/drive-results/view/drive-result-view";
import HeroView from "@/sections/hero/view/hero-view";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[72px]">
      <Header />
      <HeroView />
      <ListBrand />
      <DriveResultView />
      <CustomerFbackView />
      <Footer />
    </div>
  );
}
