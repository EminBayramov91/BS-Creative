import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        <source src="/showreel.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
    </section>
  );
}
