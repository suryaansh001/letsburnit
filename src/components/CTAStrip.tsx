import { Flame } from "lucide-react";

const CTAStrip = () => (
  <section id="cta" className="py-20 px-4 relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(0 0% 4%) 0%, hsl(0 85% 20%) 50%, hsl(0 0% 4%) 100%)" }} />
    <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, hsl(0 85% 50% / 0.15) 0%, transparent 70%)" }} />

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
        Your Transformation <span className="text-gradient-red">Starts Now</span>
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">Stop waiting. Start burning. Claim your free trial and see the difference.</p>
      <a href="#contact" className="btn-cta animate-pulse-glow text-lg">
        <Flame className="mr-2 h-5 w-5" /> Claim Your Free Trial
      </a>
    </div>
  </section>
);

export default CTAStrip;
