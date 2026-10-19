import Card from "../components/Card.jsx";
import { projects } from "../data.js";

export default function Portfolio() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Portofolio</h1>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.id} title={p.title}>
            <p className="mb-1 font-medium text-brand-700">{p.client}</p>
            {p.desc}
          </Card>
        ))}
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Klien terbaik sekaligus terburuk kami</h2>
        <ul className="flex flex-wrap gap-2">
          {projects.map((p) => (
            <li key={p.id} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
              {p.client}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}