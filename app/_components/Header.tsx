"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#work", label: "أعمالنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink">
      {/* px = 102px desktop side padding, py = 24px (Figma) */}
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-[102px]">
        {/* Logo — top-right corner (RTL start) */}
        <a href="#top" aria-label="BS Creative" className="shrink-0">
          <Image
            src="/logo.png"
            alt="BS Creative"
            width={134}
            height={53}
            priority
            className="h-auto w-[112px] lg:w-[134px]"
          />
        </a>

        {/* Desktop nav (center) */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle (RTL end / left) */}
        <div className="flex items-center gap-3">
          {/* Button spec (Figma): IBM Plex 16/400, radius 8px, padding 16/24,
              default cream bg + brand text, hover swaps to brand bg + cream text */}
          <a
            href="#contact"
            className="hidden rounded-lg bg-cream px-6 py-4 text-base font-normal leading-none text-brand transition-colors hover:bg-brand hover:text-cream md:inline-block"
          >
            اطلب العرض
          </a>
          <button
            type="button"
            aria-label="القائمة"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-cream md:hidden"
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

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-ink px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-lg bg-cream px-6 py-3.5 text-base font-normal text-brand"
              >
                اطلب العرض
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
