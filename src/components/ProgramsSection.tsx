import { Flame, Dumbbell, StretchHorizontal, UserCheck } from "lucide-react";

const programs = [
  { icon: Flame, title: "Fat Loss Bootcamps", desc: "High-intensity sessions designed to torch calories and boost endurance." },
  { icon: Dumbbell, title: "Muscle Building", desc: "Structured strength programs for size, power, and definition." },
  { icon: StretchHorizontal, title: "Functional & Mobility", desc: "Improve flexibility, core strength, and injury resistance." },
  { icon: UserCheck, title: "Personal Coaching", desc: "Dedicated 1-on-1 sessions tailored to your body and goals." },
];

const ProgramsSection = () => (
  <section id="programs" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Our Training <span className="text-gradient-red">Programs</span></h2>
      <p className="section-subtitle">From fat burn to muscle gain — find your path.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p) => (
          <div key={p.title} className="glass-card p-6 text-center group">
            <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center transition-colors" style={{ background: "hsl(0 85% 50% / 0.1)" }}>
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#contact" className="btn-outline-glow">View Workout Schedule</a>
      </div>
    </div>
  </section>
);

export default ProgramsSection;
