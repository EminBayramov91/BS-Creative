import styles from "./MissionVision.module.css";

// NOTE: Arabic copy transcribed from Figma screenshots — verify / replace.
// The رسالتنا (mission) text looks duplicated from the Team section in the
// mockup (likely placeholder) — confirm the real mission text.
const visionText =
  "مؤمنين إن كل شي يبدأ بـ لحظة بسيطة. فكرة صغيرة... إحساس... شرارة. إحنا نلتقط هالشرارة، ونكمّلها معك لين تصير واقع واضح، قوي، وهويته تصرخ «أنا هنا».";

const missionText =
  "إحنا ناس نحب الشغل الحقيقي... الشغل اللي يتبسم له العميل بدون ما نطلب منه يتبسم. فريقنا مو رسمي بزيادة ولا فوضوي بزيادة... إحنا الخليط اللي يخليك ترتاح. تختلف، تناقش، نرجع نبدأ، ونسوّي الشي عشر مرات... دام النتيجة الأخيرة تشبهك وتشبهنا. وبيّنا سر صغير... إحنا نستمتع بالشغل أكثر مما المفروض أحد يستمتع بأي شغل.";

export default function MissionVision() {
  return (
    <section id="mission-vision" className={styles.section}>
      <div className={styles.grid}>
        {/* Vision — white card (right / RTL start) */}
        <article className={`${styles.card} ${styles.cardWhite}`}>
          <h2 className={styles.heading}>رؤيتنا</h2>
          <p className={styles.body}>{visionText}</p>
        </article>

        {/* Mission — green card (left) */}
        <article className={`${styles.card} ${styles.cardGreen}`}>
          <h2 className={styles.heading}>رسالتنا</h2>
          <p className={styles.body}>{missionText}</p>
        </article>
      </div>
    </section>
  );
}
