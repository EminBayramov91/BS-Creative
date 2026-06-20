import Image from "next/image";
import styles from "./Logos.module.css";

// Client logos. Order matches the design (left → right). The two white wordmarks
// (sajah / muhaya) were hard to tell apart in the source files — swap if needed.
type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  glow?: boolean;
};

const logos: Logo[] = [
  { src: "/logos/events.png", alt: "EVENTS", width: 161, height: 50 },
  { src: "/logos/nalnio2.png", alt: "نالنيو", width: 126, height: 50 },
  {
    src: "/logos/reserve-authority1.png",
    alt: "Royal Reserve Development Authority",
    width: 183,
    height: 50,
  },
  { src: "/logos/tourise1.png", alt: "TOURISE Riyadh 2025", width: 76, height: 50 },
  { src: "/logos/sajah1.png", alt: "محيا", width: 56, height: 72 },
  { src: "/logos/muhaya1.png", alt: "سجى", width: 137, height: 50 },
  { src: "/logos/gaca2.png", alt: "GACA", width: 183, height: 36 },
  // New client logos (2026-06-20) — trimmed of whitespace, uniform 50px height
  { src: "/logos/new-aanaab.png", alt: "Aanaab", width: 156, height: 50 },
  { src: "/logos/new-delta.png", alt: "Delta Schools", width: 166, height: 50, glow: true },
  { src: "/logos/new-logoa.png", alt: "", width: 33, height: 50 },
  { src: "/logos/new-khobar.png", alt: "Khobar Season", width: 35, height: 50 },
  { src: "/logos/new-logob.png", alt: "DQ Souq", width: 120, height: 50 },
  { src: "/logos/new-bolver.png", alt: "BOLVER USA", width: 177, height: 50 },
  { src: "/logos/new-diplomatic.png", alt: "Diplomatic Quarter", width: 134, height: 50 },
  { src: "/logos/new-luxury.png", alt: "Luxury KSA", width: 424, height: 50 },
  { src: "/logos/new-spirit.png", alt: "روح السعودية", width: 104, height: 50 },
  // Two more client logos (2026-06-21)
  { src: "/logos/new-badael.png", alt: "Badael", width: 192, height: 121 },
  { src: "/logos/new-dzrt.png", alt: "DZRT", width: 340, height: 340 },
];

export default function Logos() {
  return (
    <section id="logos" className={styles.section}>
      <div className={styles.marquee}>
        {/* Track holds two identical copies so the scroll loops seamlessly
            (the animation moves it by exactly -50% = one copy). */}
        <div className={styles.track}>
          {logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={logo.glow ? `${styles.logo} ${styles.glow}` : styles.logo}
            />
          ))}
          {/* Duplicate set — decorative only, hidden from screen readers */}
          {logos.map((logo) => (
            <Image
              key={`${logo.src}-dup`}
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              className={logo.glow ? `${styles.logo} ${styles.glow}` : styles.logo}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}
