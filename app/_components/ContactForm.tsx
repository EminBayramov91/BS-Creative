"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

// Web3Forms access key for Info@bscreatve.com.
// This key is public by design — it can ONLY deliver to the inbox that was
// verified when the key was created. Get/replace it at https://web3forms.com.
const ACCESS_KEY = "eda7d7cd-f78a-4d09-9315-49e79ca2b766";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const familyName = String(data.get("familyName") ?? "").trim();

    const payload = {
      access_key: ACCESS_KEY,
      subject: "طلب عرض سعر جديد من موقع BS Creative",
      from_name: "BS Creative Website",
      name: `${firstName} ${familyName}`.trim(),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      botcheck: data.get("botcheck") ? "true" : "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Honeypot — hidden from users; bots that tick it get rejected */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            style={{ display: "none" }}
          />

          <div className={styles.fields}>
            <input
              type="text"
              name="firstName"
              placeholder="الاسم الأول"
              className={styles.field}
              required
            />
            <input
              type="text"
              name="familyName"
              placeholder="اسم العائلة"
              className={styles.field}
            />
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              className={styles.field}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              className={styles.field}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="الرسالة"
            className={styles.textarea}
            required
          />

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "جارٍ الإرسال..." : "إرسال"}
          </button>

          {status === "success" && (
            <p className={`${styles.status} ${styles.statusSuccess}`}>
              تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.
            </p>
          )}
          {status === "error" && (
            <p className={`${styles.status} ${styles.statusError}`}>
              حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
