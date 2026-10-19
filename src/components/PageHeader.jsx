export default function PageHeader({ title, description }) {
  return (
    <section className="bg-ink-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500 md:text-lg">{description}</p>}
      </div>
    </section>
  );
}
