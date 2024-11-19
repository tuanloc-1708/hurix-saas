import { Footer } from "@/components/footer";
import Header from "@/components/header";
import ListBrand from "@/sections/brandname/list-brand";
import DriveResult from "@/sections/drive-results/card/drive-result-card";
import HeroView from "@/sections/hero/view/hero-view";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[72px]">
      <Header />
      <HeroView />
      <ListBrand />
      <DriveResult />
      <Footer />
    </div>
  );
}
