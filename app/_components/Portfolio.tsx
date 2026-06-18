"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Portfolio.module.css";

// 5 unique works, repeated so there's a longer reel to scroll
const base = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
];
const N = base.length;
// triple the reel so the loop is seamless (prev copy | real | next copy)
const reel = [...base, ...base, ...base];

const CARD_W = 240;
const GAP = 24;
const STEP = CARD_W + GAP;

function ArrowLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M12 5L5 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12H19M12 19L19 12L12 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Portfolio() {
  const [index, setIndex] = useState(0); // logical position; may briefly leave [0, N)
  const [animate, setAnimate] = useState(true);

  const go = (dir: number) => {
    setAnimate(true);
    setIndex((i) => i + dir);
  };
  const goTo = (i: number) => {
    setAnimate(true);
    setIndex(i);
  };

  // when a loop step lands on a clone, snap back into the middle copy w/o animating
  const onRest = () => {
    if (index >= N) {
      setAnimate(false);
      setIndex(index - N);
    } else if (index < 0) {
      setAnimate(false);
      setIndex(index + N);
    }
  };

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
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    go(dx > 0 ? -1 : 1);
  }

  const offset = -((N + index) * STEP); // first card of the real copy sits at the left edge
  const activeDot = ((index % N) + N) % N;

  return (
    <section id="work" className={styles.section}>
      <h2 className={styles.heading}>أعمالنا</h2>

      <div
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{
            transform: `translateX(${offset}px)`,
            transition: animate ? undefined : "none",
          }}
          onTransitionEnd={onRest}
        >
          {reel.map((src, i) => (
            <div key={i} className={styles.slide}>
              <Image
                src={src}
                alt=""
                width={480}
                height={720}
                className={styles.slideImg}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(-1)}
          aria-label="السابق"
        >
          <ArrowLeftIcon />
        </button>

        <div className={styles.dots}>
          {base.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`اذهب إلى العمل ${i + 1}`}
              aria-current={i === activeDot}
              className={`${styles.dot} ${i === activeDot ? styles.dotActive : ""}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(1)}
          aria-label="التالي"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
