export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-svh min-h-[600px] w-full overflow-hidden bg-ink"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        <source src="/showreel.mp4" type="video/mp4" />
      </video>

      {/* Contrast overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      {/* Top fade — keeps the header readable over bright frames */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />
      {/* Bottom fade — blends the video into the next (black) section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
