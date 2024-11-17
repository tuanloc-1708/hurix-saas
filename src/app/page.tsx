import { Footer } from "@/components/footer";
import Header from "@/components/header";
import HeroView from "@/sections/hero/view/hero-view";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[72px]">
      <Header />
      <HeroView />
      <Footer />
    </div>
  );
}
