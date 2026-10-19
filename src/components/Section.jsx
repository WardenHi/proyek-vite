// Pembungkus bagian halaman agar lebar dan jarak konsisten.
export default function Section({ title, intro, children, className = "" }) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 ${className}`}>
      {title && <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{title}</h2>}
      {intro && <p className="mt-3 max-w-2xl leading-relaxed text-ink-500">{intro}</p>}
      <div className={title ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
