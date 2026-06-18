import Image from "next/image";
import styles from "./Logos.module.css";

// Client logos. Order matches the design (left → right). The two white wordmarks
// (sajah / muhaya) were hard to tell apart in the source files — swap if needed.
const logos = [
  { src: "/logos/events.png", alt: "EVENTS", width: 161, height: 91 },
  { src: "/logos/nalnio.png", alt: "نالنيو", width: 99, height: 99 },
  {
    src: "/logos/reserve-authority.png",
    alt: "Royal Reserve Development Authority",
    width: 142,
    height: 39,
  },
  { src: "/logos/tourise.png", alt: "TOURISE Riyadh 2025", width: 98, height: 67 },
  { src: "/logos/sajah.png", alt: "سجى", width: 52, height: 66 },
  { src: "/logos/muhaya.png", alt: "محيا", width: 103, height: 103 },
  { src: "/logos/gaca.png", alt: "GACA", width: 126, height: 74 },
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
