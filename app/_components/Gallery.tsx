"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const slides = [
  "/slider/1.jpg",
  "/slider/2.jpg",
  "/slider/3.jpg",
  "/slider/4.jpg",
  "/slider/5.jpg",
];

const SLIDE_W = 300;
const GAP = 40;
const DEFAULT_INDEX = 2; // featured slide centered by default

export default function Gallery() {
  const [active, setActive] = useState(DEFAULT_INDEX);

  // shift the track so the active slide is centered (track has left: 50%)
  const offset = -(active * (SLIDE_W + GAP) + SLIDE_W / 2);

  // touch / swipe support
  const touchX = useRef(0);
  const touchY = useRef(0);
  function handleTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
    touchY.current = e.touches[0].clientY;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchX.current;
    const dy = e.changedTouches[0].clientY - touchY.current;
    // ignore taps and vertical (page-scroll) swipes
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) setActive((a) => Math.max(0, a - 1));
    else setActive((a) => Math.min(slides.length - 1, a + 1));
  }

  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden />

      <div className={styles.head}>
        <h2 className={styles.heading}>تجربتك معنا... غير!</h2>
        <p className={styles.subtitle}>
          نحن وكالة متخصصة في إنتاج الصور والفيديو
        </p>
      </div>

      <div
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`عرض الصورة ${i + 1}`}
              className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}
            >
              <Image
                src={src}
                alt=""
                width={600}
                height={400}
                className={styles.slideImg}
              />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`اذهب إلى الشريحة ${i + 1}`}
            aria-current={i === active}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
