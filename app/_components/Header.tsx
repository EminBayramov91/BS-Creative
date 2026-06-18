"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#work", label: "أعمالنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo — top-right corner (RTL start) */}
        <a href="#top" aria-label="BS Creative" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="BS Creative"
            width={134}
            height={53}
            priority
            className={styles.logoImg}
          />
        </a>

        {/* Desktop nav (center) */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle (RTL end / left) */}
        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            اطلب العرض
          </a>
          <button
            type="button"
            aria-label="القائمة"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={styles.burger}
          >
            {open ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (animated dropdown) */}
      <nav
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={styles.mobileLink}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={styles.mobileCta}
            >
              اطلب العرض
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
