import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border/50" style={{ background: "hsla(0,0%,4%,0.85)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <Flame className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Lets Burn It
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className="btn-cta text-sm py-2 px-5">Join Now</a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 px-4 py-4 flex flex-col gap-4" style={{ background: "hsla(0,0%,4%,0.95)" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="btn-cta text-sm py-2 px-5 text-center">Join Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
