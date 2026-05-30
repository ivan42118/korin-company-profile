import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { AboutStats } from "../components/sections/AboutStats";
import { ContactSection } from "../components/sections/ContactSection";
import { FacilitiesSection } from "../components/sections/FacilitiesSection";
import { HeroSection } from "../components/sections/HeroSection";
import { MachinesSection } from "../components/sections/MachinesSection";
import { ProductionFlowSection } from "../components/sections/ProductionFlowSection";
import { ProductsSection } from "../components/sections/ProductsSection";
import { WorkflowSection } from "../components/sections/WorkflowSection";
import { LenisProvider } from "../components/ui/LenisProvider";
import { MarqueeText } from "../components/ui/MarqueeText";
import { PageCurtain } from "../components/ui/PageCurtain";
import { ScrollProgress } from "../components/ui/ScrollProgress";
import { site } from "../content";

export default function Home() {
  return (
    <>
      <LenisProvider />
      <ScrollProgress />
      <PageCurtain />
      <Navbar />
      <main>
        <HeroSection videoSrc={site.heroVideoSrc} />
        <MarqueeText />
        <AboutStats />
        <MachinesSection />
        <ProductionFlowSection />
        <ProductsSection />
        <WorkflowSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
