import { Flame, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img src={heroImg} alt="Intense gym training" className="absolute inset-0 w-full h-full object-cover" />
    {/* Overlays */}
    <div className="absolute inset-0 bg-background/70" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 80%, hsl(0 85% 50% / 0.15) 0%, transparent 60%)" }} />

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up">
        Burn Limits. Build Strength.{" "}
        <span className="text-gradient-red">Become Unstoppable.</span>
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-1">
        A high-energy training space built for serious fat loss, muscle gain, and real transformation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
        <a href="#cta" className="btn-cta animate-pulse-glow">
          <Flame className="mr-2 h-5 w-5" /> Get a Free Trial Session
        </a>
        <a href="#contact" className="btn-outline-glow">
          <MapPin className="mr-2 h-5 w-5" /> Visit Lets Burn It Today
        </a>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
