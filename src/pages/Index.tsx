import Navbar from "@/components/Navbar";
import MovingBanner from "@/components/MovingBanner";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProgramsSection from "@/components/ProgramsSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import CTAStrip from "@/components/CTAStrip";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <HeroSection />
      <WhyChooseSection />
      <ProgramsSection />
      <TrainersSection />
      <TestimonialsSection />
      <PricingSection />
      <GallerySection />
      <CTAStrip />
      <ContactSection />
    </main>
    <Footer />
    <MovingBanner />
    <StickyMobileBar />
    <WhatsAppButton />
  </div>
);

export default Index;
