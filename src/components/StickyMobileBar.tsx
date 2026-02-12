import { Flame, Phone } from "lucide-react";

const StickyMobileBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border/50 p-3 flex gap-3" style={{ background: "hsla(0,0%,4%,0.95)", backdropFilter: "blur(12px)" }}>
    <a href="#cta" className="btn-cta flex-1 text-center text-sm py-3">
      <Flame className="mr-1.5 h-4 w-4 inline" /> Book Free Trial
    </a>
    <a href="tel:+91XXXXXXXXXX" className="btn-outline-glow flex-1 text-center text-sm py-3">
      <Phone className="mr-1.5 h-4 w-4 inline" /> Call Now
    </a>
  </div>
);

export default StickyMobileBar;
