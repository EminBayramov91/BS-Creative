// NOTE: Arabic body copy transcribed from low-res Figma screenshots — verify /
// replace with the exact text pasted from Figma (especially the left column).

const mainText = `يا هلا... إحنا بس كريتيف.
إحنا الوكالة اللي بدأت من لحظة صمت... من قرار بسيط بس كان ثقيل:
«القادم بيكون مختلف.»

عشر شهور وإحنا نشتغل بدون صوت... نبحث، نجرب، نكبّر أفكار صغيرة ونشوفها تكبر قدّامنا. ما كنا نحتاج نعلن... كنا نحتاج نثبت.
وأثبتنا.
والحين... قررنا نتكلم، بس على طريقتنا.`;

const sideText = `إحنا مو وكالة... إحنا عقول بتمرّن بين فكرة وفكرة، وكوب قهوة ما بلحق يبرد، وشغف ما يعرف يوقف.
نشتغل معك كإننا جزء من فريقك، مو جهة خارجية. نسمع، نستوعب، ونرجّع كل شيء بأكثر مما توقعت إنك كنت تبيه.`;

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-ink px-6 pb-12 pt-28 sm:px-10 lg:px-[102px] lg:pt-[140px]"
    >
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
        {/* Row 1 — heading (right), empty (left) */}
        <h2 className="text-right text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-[48px] lg:leading-none">
          يا هلا.... إحنا بس كريتيف.
        </h2>
        <div className="hidden md:block" aria-hidden />

        {/* Row 2 — main paragraph (right), side paragraph (left) */}
        <p className="whitespace-pre-line text-right text-base font-normal leading-[1.6] text-cream/80">
          {mainText}
        </p>
        <p className="whitespace-pre-line text-right text-base font-normal leading-[1.6] text-cream/80">
          {sideText}
        </p>
      </div>
    </section>
  );
}
