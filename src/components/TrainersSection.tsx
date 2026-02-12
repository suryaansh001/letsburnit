import trainerRohit from "@/assets/trainer-rohit.jpg";
import trainerSimran from "@/assets/trainer-simran.jpg";
import trainerKaran from "@/assets/trainer-karan.jpg";

const trainers = [
  { name: "Rohit Singh", specialty: "Strength Specialist", bio: "Expert in muscle-building programs and progressive overload training.", img: trainerRohit },
  { name: "Simran Kaur", specialty: "Fat Loss Coach", bio: "Specialist in HIIT, conditioning, and sustainable weight loss.", img: trainerSimran },
  { name: "Karan Verma", specialty: "Functional Trainer", bio: "Focuses on mobility, posture, and injury-prevention workouts.", img: trainerKaran },
];

const TrainersSection = () => (
  <section id="trainers" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Meet the <span className="text-gradient-red">Coaches</span></h2>
      <p className="section-subtitle">Dedicated professionals who won't let you quit.</p>

      <div className="grid md:grid-cols-3 gap-8">
        {trainers.map((t) => (
          <div key={t.name} className="glass-card overflow-hidden group">
            <div className="h-72 overflow-hidden">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{t.name}</h3>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">{t.specialty}</p>
              <p className="text-muted-foreground text-sm">{t.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainersSection;
