import Image from "next/image";
import styles from "./Logos.module.css";

// Client logos. Order matches the design (left → right). The two white wordmarks
// (sajah / muhaya) were hard to tell apart in the source files — swap if needed.
const logos = [
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
];

export default function Logos() {
  return (
    <section id="logos" className={styles.section}>
      <div className={styles.row}>
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={styles.logo}
          />
        ))}
      </div>
    </section>
  );
}
