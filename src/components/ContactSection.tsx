import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { z } from "zod";

const trialSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  goal: z.string().trim().min(1, "Please select a goal"),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = trialSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Visit <span className="text-gradient-red">Lets Burn It</span></h2>
        <p className="section-subtitle">Walk in. Work out. Walk out stronger.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Address</p>
                  <p className="text-muted-foreground text-sm">VDN, Near Akhada</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Phone</p>
                  <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Timings</p>
                  <p className="text-muted-foreground text-sm">5:00 AM – 11:00 PM (Mon–Sat)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="tel:+91XXXXXXXXXX" className="btn-cta flex-1 text-center text-sm py-3">Call Now</a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow flex-1 text-center text-sm py-3"
              >
                Get Directions
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-52">
              <iframe
                title="Lets Burn It Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.78!3d26.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzM2LjAiTiA3NcKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                className="w-full h-full border-0 grayscale opacity-60"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Trial Booking Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Book Your <span className="text-gradient-red">Free Trial</span>
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(0 85% 50% / 0.15)" }}>
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>You're In!</h4>
                <p className="text-muted-foreground text-sm">We'll reach out shortly to confirm your session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>Your Goal</label>
                  <select
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  >
                    <option value="">Select your goal</option>
                    <option value="fat-loss">Fat Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="strength">Strength Training</option>
                  </select>
                  {errors.goal && <p className="text-primary text-xs mt-1">{errors.goal}</p>}
                </div>
                <button type="submit" className="btn-cta w-full text-center">
                  <Send className="mr-2 h-4 w-4" /> Book Free Trial
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
