import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹1,099",
    period: "/ month",
    features: ["Full Gym Access", "Locker Facility", "Open Hours: 5 AM – 11 PM"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2,099",
    period: "/ month",
    features: ["Full Gym Access", "Group Training Classes", "Diet Guidance", "Locker + Towel"],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹3,799",
    period: "/ month",
    features: ["Full Gym Access", "All Group Classes", "Personal Coaching Sessions", "Nutrition Plan", "Priority Booking"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">Choose Your <span className="text-gradient-red">Training Plan</span></h2>
      <p className="section-subtitle">Invest in yourself. Pick the plan that matches your fire.</p>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`glass-card p-8 flex flex-col relative ${p.popular ? "glow-red border-primary/30 md:scale-105" : ""}`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: "var(--gradient-cta)", fontFamily: "'Oswald', sans-serif" }}>
                Most Popular
              </div>
            )}
            <h3 className="text-2xl mb-2 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.name}</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-gradient-red">{p.price}</span>
              <span className="text-muted-foreground text-sm">{p.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#cta" className={p.popular ? "btn-cta text-center" : "btn-outline-glow text-center"}>
              Join Now
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
