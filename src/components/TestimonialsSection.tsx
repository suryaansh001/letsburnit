import { Quote } from "lucide-react";

const testimonials = [
  { quote: "I dropped 10 kg and gained strength I never had before.", name: "Manish T." },
  { quote: "The trainers don't let you quit. Best decision I made.", name: "Priya R." },
  { quote: "Serious gym for serious people.", name: "Deepak S." },
];

const TestimonialsSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Members Who <span className="text-gradient-red">Leveled Up</span></h2>
      <p className="section-subtitle">Real results. Real people. No BS.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card p-8 glow-red-subtle">
            <Quote className="h-8 w-8 text-primary/40 mb-4" />
            <p className="text-foreground text-lg mb-6 italic leading-relaxed">"{t.quote}"</p>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
