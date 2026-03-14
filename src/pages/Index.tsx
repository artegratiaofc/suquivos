import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlavorGrid from "@/components/FlavorGrid";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FlavorGrid />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
