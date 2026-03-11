import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FabricShowcase from "@/components/FabricShowcase";
import CollectionsSection from "@/components/CollectionsSection";
import FabricCards3D from "@/components/FabricCards3D";
import HeritageSection from "@/components/HeritageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  useEffect(() => {
    document.title = "NASEEGER — نَسِيجَر | Lavender Thobe House";
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#090c0a" }}>
      <ScrollProgress />
      <Navigation />
      <main>
        <FabricShowcase />
        <CollectionsSection />
        <FabricCards3D />
        <HeritageSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
