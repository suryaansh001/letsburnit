import { Flame, Dumbbell, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Flame,
    title: "Hardcore Training Environment",
    desc: "Focused atmosphere built for people who are serious about progress.",
  },
  {
    icon: Dumbbell,
    title: "Experienced Coaches",
    desc: "Certified trainers who push you safely toward real results.",
  },
  {
    icon: TrendingUp,
    title: "Visible Transformations",
    desc: "Structured programs that deliver measurable change.",
  },
];

const WhyChooseSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">
        Why <span className="text-gradient-red">Lets Burn It</span> Stands Out
      </h2>
      <p className="section-subtitle">We don't do average. Every rep, every session, every coach — built for results.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={c.title} className={`glass-card p-8 text-center animate-fade-up-delay-${i + 1}`}>
            <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: "hsl(0 85% 50% / 0.12)" }}>
              <c.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
