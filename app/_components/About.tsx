import styles from "./About.module.css";

// NOTE: Arabic body copy transcribed from low-res Figma screenshots — verify /
// replace with the exact text pasted from Figma (especially the left column).

const mainText = `إحنا الوكالة اللي بدأت من لحظة صمت... من قرار بسيط بس كان ثقيل:
«القادم بيكون مختلف.»

عشر شهور وإحنا نشتغل بدون صوت... نبحث، نجرب، نكبّر أفكار صغيرة ونشوفها تكبر قدّامنا. ما كنا نحتاج نعلن... كنا نحتاج نثبت.
وأثبتنا.
والحين... قررنا نتكلم، بس على طريقتنا.`;

const sideText = `إحنا مو وكالة... إحنا عقول بتمرّن بين فكرة وفكرة، وكوب قهوة ما بلحق يبرد، وشغف ما يعرف يوقف.
نشتغل معك كإننا جزء من فريقك، مو جهة خارجية. نسمع، نستوعب، ونرجّع كل شيء بأكثر مما توقعت إنك كنت تبيه.`;

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        {/* Row 1 — heading (right), empty (left) */}
        <h2 className={styles.heading}>يا هلا.... إحنا بس كريتيف.</h2>
        <div className={styles.spacer} aria-hidden />

        {/* Row 2 — main paragraph (right), side paragraph (left) */}
        <p className={styles.paragraph}>{mainText}</p>
        <p className={styles.paragraph}>{sideText}</p>
      </div>
    </section>
  );
}
