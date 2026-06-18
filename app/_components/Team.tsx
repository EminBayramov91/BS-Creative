import Image from "next/image";
import styles from "./Team.module.css";

// NOTE: Arabic body copy transcribed from Figma screenshots — verify / replace
// with the exact text pasted from Figma.
const paragraphs = [
  "إحنا ناس نحب الشغل الحقيقي... الشغل اللي يتبسم له العميل بدون ما نطلب منه يتبسم. فريقنا مو رسمي بزيادة ولا فوضوي بزيادة... إحنا الخليط اللي يخليك ترتاح. تختلف، تناقش، نرجع نبدأ، ونسوّي الشي عشر مرات... دام النتيجة الأخيرة تشبهك وتشبهنا. وبيّنا سر صغير... إحنا نستمتع بالشغل أكثر مما المفروض أحد يستمتع بأي شغل.",
  "معنا بتلقى فريق يشتغل بقلب واحد... يسمع، يفهم، ويحول فكرتك لشي يشبهك ويشبهنا. تعامل كل مشروع كأنه قصتنا الجديدة، ونخوضه بحماس مسؤول، ومرونة ما تعرف كلمة «صعب». فريقنا يتحرك بسرعة، ويركّز على التفاصيل الصغيرة اللي تبني نتيجة كبيرة. ومهما كان حجم مشروعك... بنخليه تجربة تترك أثر، مو مجرد شغل ينتهي.",
];

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.grid}>
        {/* Text — right (RTL start) */}
        <div className={styles.text}>
          <h2 className={styles.heading}>كلمة فريق بس كريتيف</h2>
          {paragraphs.map((text, i) => (
            <p key={i} className={styles.paragraph}>
              {text}
            </p>
          ))}
        </div>

        {/* Image — left */}
        <div className={styles.imageWrap}>
          <Image
            src="/team.jpg"
            alt="فريق بس كريتيف"
            width={528}
            height={352}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
