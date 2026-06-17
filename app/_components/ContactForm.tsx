// Contact section — UI only, no submit logic yet (button is type="button").
// TODO: wire up submission (send to email backend) later.

const fieldClass =
  "h-[64px] w-full rounded-lg bg-cream px-5 text-right text-base text-brand outline-none transition placeholder:text-brand/55 focus:ring-2 focus:ring-brand/40";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-ink px-6 py-24 sm:px-10 lg:px-[102px] lg:py-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Right column (RTL start): heading + description + decorative pattern */}
        <div className="relative">
          {/* Frame 67 — striped decoration. CSS approximation; swap for the
              exported SVG/PNG from Figma when available. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-1/2 hidden h-[466px] w-[501px] -translate-y-1/2 lg:block"
            style={{
              backgroundImage:
                "radial-gradient(55% 45% at 65% 55%, rgba(9,55,55,0.65) 0%, rgba(9,55,55,0) 70%), repeating-linear-gradient(90deg, rgba(255,250,242,0.12) 0px, rgba(255,250,242,0.12) 1px, transparent 1px, transparent 3px)",
              maskImage:
                "radial-gradient(70% 70% at 50% 50%, #000 35%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(70% 70% at 50% 50%, #000 35%, transparent 100%)",
            }}
          />

          <div className="relative z-10 max-w-[420px]">
            <h2 className="text-right text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
              يسعدنا تواصلكم معنا
            </h2>
            <p className="mt-5 text-right text-base font-normal leading-relaxed text-cream">
              يسعدنا تواصلكم لطلب عرض سعر على خدماتنا الإبداعية المتكاملة!
            </p>
          </div>
        </div>

        {/* Left column: form */}
        <form className="flex w-full max-w-[636px] flex-col gap-4 lg:justify-self-end">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input type="text" name="firstName" placeholder="الاسم الأول" className={fieldClass} />
            <input type="text" name="familyName" placeholder="اسم العائلة" className={fieldClass} />
            <input type="tel" name="phone" placeholder="رقم الهاتف" className={fieldClass} />
            <input type="email" name="email" placeholder="البريد الإلكتروني" className={fieldClass} />
          </div>

          <textarea
            name="message"
            placeholder="الرسالة"
            className="h-[149px] w-full resize-none rounded-lg bg-cream px-5 py-4 text-right text-base text-brand outline-none transition placeholder:text-brand/55 focus:ring-2 focus:ring-brand/40"
          />

          <button
            type="button"
            className="h-[64px] w-full rounded-lg bg-brand text-base font-medium text-cream transition-colors hover:bg-brand-dark"
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
}
