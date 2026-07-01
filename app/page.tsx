import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { JourneysSection } from "./components/JourneysSection";
import { TravelInfo } from "./components/TravelInfo";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <JourneysSection />
      <WhyChooseUs />
      
      <TravelInfo />
      <CtaSection />
      <Footer />
    </>
  );
}