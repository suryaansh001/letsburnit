import { Flame, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Lets Burn It</span>
          </div>
          <p className="text-muted-foreground text-sm">Train Hard. No Excuses.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Programs", "Trainers", "Pricing", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-6 text-center">
        <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Lets Burn It. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
