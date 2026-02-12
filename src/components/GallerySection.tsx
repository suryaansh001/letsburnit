import galleryStrength from "@/assets/gallery-strength.jpg";
import galleryCardio from "@/assets/gallery-cardio.jpg";
import galleryFunctional from "@/assets/gallery-functional.jpg";
import galleryLockers from "@/assets/gallery-lockers.jpg";
import galleryCoaching from "@/assets/gallery-coaching.jpg";

const images = [
  { src: galleryStrength, label: "Strength Zone" },
  { src: galleryCardio, label: "Cardio Area" },
  { src: galleryFunctional, label: "Functional Training" },
  { src: galleryLockers, label: "Locker Rooms" },
  { src: galleryCoaching, label: "Personal Coaching" },
];

const GallerySection = () => (
  <section className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Our <span className="text-gradient-red">Facilities</span></h2>
      <p className="section-subtitle">Equipped for every kind of grind.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={img.label}
            className={`relative group overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors" />
            <span className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {img.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
