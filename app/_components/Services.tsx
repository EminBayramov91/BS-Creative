"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Services.module.css";

// NOTE: Arabic descriptions transcribed from Figma screenshots — verify / replace
// with exact text. Image→service mapping is by filename order (1.jpg → التصوير …);
// reorder the `img` values if the design pairs them differently.
const services = [
  {
    num: "01",
    title: "التصوير",
    desc: "نلقط اللحظة قبل تهرب... ونرجّعها لك جميلة كأنها ما كانت مستعجلة أصلاً.",
    img: "/services/1.jpg",
  },
  {
    num: "02",
    title: "الإنتاج",
    desc: "من فكرة على الورق... لشيء يتحرك، يتنفس، ويخلي الناس توقف وتشوف.",
    img: "/services/2.jpg",
  },
  {
    num: "03",
    title: "كتابة المحتوى",
    desc: "كلمات خفيفة، ذكية، وتدخل القلب كأنها تعرف المكان من قبل.",
    img: "/services/3.jpg",
  },
  {
    num: "04",
    title: "التسويق",
    desc: "نسوّي ضجة... مو أي ضجة. ضجة تخلّي اسمك معروف بدون ما تصرخ.",
    img: "/services/4.jpg",
  },
  {
    num: "05",
    title: "الإخراج",
    desc: "نرتّب الفوضى... ونخلّي المشهد يحكي أكثر مما تحكيه جملة كاملة.",
    img: "/services/5.jpg",
  },
  {
    num: "06",
    title: "إدارة الحسابات",
    desc: "نلبّس حساباتك شخصية... نخليها تتكلم، ترد، وتتفاعل وكأنها شخص حقيقي يحب الناس.",
    img: "/services/6.jpg",
  },
  {
    num: "07",
    title: "تنظيم المعارض والمؤتمرات",
    desc: "نحت التفاصيل الصغيرة... لأنها هي اللي تصنع يوم كبير. نسوّي لك فعالية تمشي بسلاسة وكأنها ماخذة بروفة ١٠ مرات.",
    img: "/services/7.jpg",
  },
  {
    num: "08",
    title: "التنسيق الإداري",
    desc: "نرتّب، ننظّم، ونخلّي كل شي يمشي على سكة واضحة... بدون صداع ولا ضياع.",
    img: "/services/8.jpg",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const list = listRef.current;
    const float = floatRef.current;
    if (!list || !float) return;
    const rect = list.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    float.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }

  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.heading}>خدماتنا</h2>

      <div
        ref={listRef}
        className={styles.list}
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
      >
        {services.map((service, i) => (
          <div
            key={service.num}
            className={`${styles.row} ${active === i ? styles.rowActive : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className={styles.head}>
              <span className={styles.number}>{service.num}</span>
              <h3 className={styles.title}>{service.title}</h3>
            </div>
            <p className={styles.desc}>{service.desc}</p>
          </div>
        ))}

        {/* Cursor-following image preview */}
        <div
          ref={floatRef}
          className={`${styles.float} ${active !== null ? styles.floatVisible : ""}`}
          aria-hidden
        >
          {services.map((service, i) => (
            <Image
              key={service.num}
              src={service.img}
              alt=""
              width={260}
              height={174}
              className={`${styles.floatImg} ${active === i ? styles.floatImgActive : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
