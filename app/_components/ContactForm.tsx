import styles from "./ContactForm.module.css";

// Contact section — UI only, no submit logic yet (button is type="button").
// TODO: wire up submission (send to email backend) later.

export default function ContactForm() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        {/* Right column (RTL start): heading + description + decorative pattern */}
        <div className={styles.intro}>
          <div className={styles.pattern} aria-hidden />

          <div className={styles.introContent}>
            <h2 className={styles.heading}>يسعدنا تواصلكم معنا</h2>
            <p className={styles.description}>
              يسعدنا تواصلكم لطلب عرض سعر على خدماتنا الإبداعية المتكاملة!
            </p>
          </div>
        </div>

        {/* Left column: form */}
        <form className={styles.form}>
          <div className={styles.fields}>
            <input type="text" name="firstName" placeholder="الاسم الأول" className={styles.field} />
            <input type="text" name="familyName" placeholder="اسم العائلة" className={styles.field} />
            <input type="tel" name="phone" placeholder="رقم الهاتف" className={styles.field} />
            <input type="email" name="email" placeholder="البريد الإلكتروني" className={styles.field} />
          </div>

          <textarea name="message" placeholder="الرسالة" className={styles.textarea} />

          <button type="button" className={styles.submit}>
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
}
